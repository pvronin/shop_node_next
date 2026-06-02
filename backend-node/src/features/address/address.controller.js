const prisma = require('../../../prismadb');

// دریافت همه آدرس‌های کاربر جاری
const getUserAddresses = async (req, res) => {
    try {
        const { id: userId } = req.user;

        const addresses = await prisma.addresses.findMany({
            where: { user_id: userId },
            orderBy: [
                { is_default: 'desc' },  // آدرس پیش‌فرض اول
                { created_at: 'desc' }    // سپس جدیدترین‌ها
            ],
            select: {
                id: true,
                label: true,
                province: true,
                city: true,
                postal_code: true,
                address_line: true,
                is_default: true,
                created_at: true,
                updated_at: true
            }
        });

        res.status(200).json({
            success: true,
            addresses,
            count: addresses.length
        });

    } catch (error) {
        console.error('Get user addresses error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت آدرس‌ها',
            error: error.message
        });
    }
};

// دریافت یک آدرس خاص (با بررسی مالکیت)
const getAddressById = async (req, res) => {
    try {
        const { id: userId } = req.user;
        const { addressId } = req.params;

        const addressIdInt = parseInt(addressId);

        if (isNaN(addressIdInt)) {
            return res.status(400).json({
                success: false,
                message: 'شناسه آدرس معتبر نیست'
            });
        }

        const address = await prisma.addresses.findFirst({
            where: {
                id: addressIdInt,
                user_id: userId
            },
            select: {
                id: true,
                label: true,
                province: true,
                city: true,
                postal_code: true,
                address_line: true,
                is_default: true,
                created_at: true,
                updated_at: true
            }
        });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: 'آدرس یافت نشد'
            });
        }

        res.status(200).json({
            success: true,
            address
        });

    } catch (error) {
        console.error('Get address by id error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت آدرس',
            error: error.message
        });
    }
};

// ایجاد آدرس جدید
const createAddress = async (req, res) => {
    try {
        const { id: userId } = req.user;
        const { label, province, city, postal_code, address_line, is_default = false } = req.body;

        // اعتبارسنجی فیلدهای الزامی
        if (!label || !province || !city || !postal_code || !address_line) {
            return res.status(400).json({
                success: false,
                message: 'تمام فیلدهای الزامی (برچسب، استان، شهر، کد پستی، آدرس) باید پر شوند'
            });
        }

        // اعتبارسنجی کد پستی (10 رقم)
        if (!/^\d{10}$/.test(postal_code)) {
            return res.status(400).json({
                success: false,
                message: 'کد پستی باید ۱۰ رقم باشد'
            });
        }

        // اعتبارسنجی برچسب (حداکثر 50 کاراکتر)
        if (label.length > 50) {
            return res.status(400).json({
                success: false,
                message: 'برچسب آدرس حداکثر ۵۰ کاراکتر می‌تواند باشد'
            });
        }

        let newAddress;

        // اگر آدرس جدید می‌خواهد پیش‌فرض باشد
        if (is_default) {
            // از transaction استفاده می‌کنیم
            await prisma.$transaction(async (prisma) => {
                // غیرفعال کردن آدرس پیش‌فرض قبلی (اگر وجود داشت)
                await prisma.addresses.updateMany({
                    where: {
                        user_id: userId,
                        is_default: true
                    },
                    data: {
                        is_default: false
                    }
                });

                // ایجاد آدرس جدید به عنوان پیش‌فرض
                newAddress = await prisma.addresses.create({
                    data: {
                        label: label.trim(),
                        province: province.trim(),
                        city: city.trim(),
                        postal_code: postal_code.trim(),
                        address_line: address_line.trim(),
                        user_id: userId,
                        is_default: true
                    },
                    select: {
                        id: true,
                        label: true,
                        province: true,
                        city: true,
                        postal_code: true,
                        address_line: true,
                        is_default: true,
                        created_at: true
                    }
                });
            });
        } else {
            // ایجاد آدرس معمولی
            newAddress = await prisma.addresses.create({
                data: {
                    label: label.trim(),
                    province: province.trim(),
                    city: city.trim(),
                    postal_code: postal_code.trim(),
                    address_line: address_line.trim(),
                    user_id: userId,
                    is_default: false
                },
                select: {
                    id: true,
                    label: true,
                    province: true,
                    city: true,
                    postal_code: true,
                    address_line: true,
                    is_default: true,
                    created_at: true
                }
            });
        }

        res.status(201).json({
            success: true,
            message: 'آدرس با موفقیت اضافه شد',
            address: newAddress
        });

    } catch (error) {
        console.error('Create address error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در ایجاد آدرس',
            error: error.message
        });
    }
};

// ویرایش آدرس
const updateAddress = async (req, res) => {
    try {
        const { id: userId } = req.user;
        const { addressId } = req.params;
        const { label, province, city, postal_code, address_line, is_default } = req.body;

        const addressIdInt = parseInt(addressId);

        if (isNaN(addressIdInt)) {
            return res.status(400).json({
                success: false,
                message: 'شناسه آدرس معتبر نیست'
            });
        }

        // بررسی وجود آدرس و مالکیت
        const existingAddress = await prisma.addresses.findFirst({
            where: {
                id: addressIdInt,
                user_id: userId
            }
        });

        if (!existingAddress) {
            return res.status(404).json({
                success: false,
                message: 'آدرس یافت نشد'
            });
        }

        // آماده سازی داده‌های به‌روزرسانی
        const updateData = {};

        if (label !== undefined) {
            if (label.length > 50) {
                return res.status(400).json({
                    success: false,
                    message: 'برچسب آدرس حداکثر ۵۰ کاراکتر می‌تواند باشد'
                });
            }
            updateData.label = label.trim();
        }

        if (province !== undefined) updateData.province = province.trim();
        if (city !== undefined) updateData.city = city.trim();

        if (postal_code !== undefined) {
            if (!/^\d{10}$/.test(postal_code)) {
                return res.status(400).json({
                    success: false,
                    message: 'کد پستی باید ۱۰ رقم باشد'
                });
            }
            updateData.postal_code = postal_code.trim();
        }

        if (address_line !== undefined) updateData.address_line = address_line.trim();

        updateData.updated_at = new Date();

        let updatedAddress;

        // اگر می‌خواهد وضعیت پیش‌فرض تغییر کند
        if (is_default !== undefined && is_default !== existingAddress.is_default) {
            if (is_default === true) {
                // تبدیل به آدرس پیش‌فرض
                await prisma.$transaction(async (prisma) => {
                    // غیرفعال کردن آدرس پیش‌فرض قبلی
                    await prisma.addresses.updateMany({
                        where: {
                            user_id: userId,
                            is_default: true,
                            id: { not: addressIdInt }
                        },
                        data: {
                            is_default: false
                        }
                    });

                    // به‌روزرسانی آدرس فعلی
                    updatedAddress = await prisma.addresses.update({
                        where: { id: addressIdInt },
                        data: {
                            ...updateData,
                            is_default: true
                        },
                        select: {
                            id: true,
                            label: true,
                            province: true,
                            city: true,
                            postal_code: true,
                            address_line: true,
                            is_default: true,
                            updated_at: true
                        }
                    });
                });
            } else {
                // اگر می‌خواهد پیش‌فرض نباشد
                // اما نباید آخرین آدرس را غیرپیش‌فرض کرد
                const defaultAddressesCount = await prisma.addresses.count({
                    where: {
                        user_id: userId,
                        is_default: true
                    }
                });

                if (defaultAddressesCount === 1 && existingAddress.is_default) {
                    return res.status(400).json({
                        success: false,
                        message: 'شما حداقل باید یک آدرس پیش‌فرض داشته باشید. ابتدا آدرس دیگری را به عنوان پیش‌فرض انتخاب کنید'
                    });
                }

                updatedAddress = await prisma.addresses.update({
                    where: { id: addressIdInt },
                    data: {
                        ...updateData,
                        is_default: false
                    },
                    select: {
                        id: true,
                        label: true,
                        province: true,
                        city: true,
                        postal_code: true,
                        address_line: true,
                        is_default: true,
                        updated_at: true
                    }
                });
            }
        } else {
            // فقط آپدیت ساده بدون تغییر وضعیت پیش‌فرض
            updatedAddress = await prisma.addresses.update({
                where: { id: addressIdInt },
                data: updateData,
                select: {
                    id: true,
                    label: true,
                    province: true,
                    city: true,
                    postal_code: true,
                    address_line: true,
                    is_default: true,
                    updated_at: true
                }
            });
        }

        res.status(200).json({
            success: true,
            message: 'آدرس با موفقیت ویرایش شد',
            address: updatedAddress
        });

    } catch (error) {
        console.error('Update address error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در ویرایش آدرس',
            error: error.message
        });
    }
};

// حذف آدرس
const deleteAddress = async (req, res) => {
    try {
        const { id: userId } = req.user;
        const { addressId } = req.params;

        const addressIdInt = parseInt(addressId);

        if (isNaN(addressIdInt)) {
            return res.status(400).json({
                success: false,
                message: 'شناسه آدرس معتبر نیست'
            });
        }

        // بررسی وجود آدرس و مالکیت
        const address = await prisma.addresses.findFirst({
            where: {
                id: addressIdInt,
                user_id: userId
            }
        });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: 'آدرس پیدا نشد'
            });
        }

        // چک کردن تعداد آدرس‌های کاربر
        const addressesCount = await prisma.addresses.count({
            where: { user_id: userId }
        });

        if (addressesCount === 1) {
            return res.status(400).json({
                success: false,
                message: 'شما فقط یک آدرس دارید. برای حذف آن ابتدا یک آدرس دیگر اضافه کنید'
            });
        }

        // اگر آدرس پیش‌فرض در حال حذف است
        if (address.is_default) {
            // پیدا کردن یک آدرس دیگر برای تبدیل به پیش‌فرض
            const anotherAddress = await prisma.addresses.findFirst({
                where: {
                    user_id: userId,
                    id: { not: addressIdInt }
                }
            });

            if (anotherAddress) {
                await prisma.addresses.update({
                    where: { id: anotherAddress.id },
                    data: { is_default: true }
                });
            }
        }

        // حذف آدرس
        await prisma.addresses.delete({
            where: { id: addressIdInt }
        });

        // دریافت لیست به‌روز شده آدرس‌ها
        const updatedAddresses = await prisma.addresses.findMany({
            where: { user_id: userId },
            orderBy: { is_default: 'desc' }
        });

        res.status(200).json({
            success: true,
            message: 'آدرس با موفقیت حذف شد',
            addresses: updatedAddresses,
            count: updatedAddresses.length
        });

    } catch (error) {
        console.error('Delete address error:', error);

        // خطای مربوط به foreign key
        if (error.code === 'P2003') {
            return res.status(400).json({
                success: false,
                message: 'این آدرس در حال استفاده است (مثلاً در سفارش‌ها). ابتدا وابستگی‌ها را حذف کنید'
            });
        }

        res.status(500).json({
            success: false,
            message: 'خطا در حذف آدرس',
            error: error.message
        });
    }
};

// تنظیم آدرس به عنوان پیش‌فرض
const setDefaultAddress = async (req, res) => {
    try {
        const { id: userId } = req.user;
        const { addressId } = req.params;

        const addressIdInt = parseInt(addressId);

        if (isNaN(addressIdInt)) {
            return res.status(400).json({
                success: false,
                message: 'شناسه آدرس معتبر نیست'
            });
        }

        // بررسی وجود آدرس و مالکیت
        const address = await prisma.addresses.findFirst({
            where: {
                id: addressIdInt,
                user_id: userId
            }
        });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: 'آدرس یافت نشد'
            });
        }

        // اگر همین الان پیش‌فرض است
        if (address.is_default) {
            return res.status(400).json({
                success: false,
                message: 'این آدرس در حال حاضر پیش‌فرض است'
            });
        }

        // استفاده از transaction برای consistency
        await prisma.$transaction(async (prisma) => {
            // غیرفعال کردن آدرس پیش‌فرض فعلی
            await prisma.addresses.updateMany({
                where: {
                    user_id: userId,
                    is_default: true
                },
                data: {
                    is_default: false
                }
            });

            // تنظیم آدرس جدید به عنوان پیش‌فرض
            await prisma.addresses.update({
                where: { id: addressIdInt },
                data: {
                    is_default: true,
                    updated_at: new Date()
                }
            });
        });

        // دریافت لیست به‌روز شده آدرس‌ها
        const updatedAddresses = await prisma.addresses.findMany({
            where: { user_id: userId },
            orderBy: [
                { is_default: 'desc' },
                { created_at: 'desc' }
            ],
            select: {
                id: true,
                label: true,
                province: true,
                city: true,
                postal_code: true,
                address_line: true,
                is_default: true,
                created_at: true,
                updated_at: true
            }
        });

        res.status(200).json({
            success: true,
            message: 'آدرس پیش‌فرض با موفقیت تغییر کرد',
            addresses: updatedAddresses
        });

    } catch (error) {
        console.error('Set default address error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در تنظیم آدرس پیش‌فرض',
            error: error.message
        });
    }
};

// دریافت استان‌های ایران (برای فرم آدرس)
const getProvinces = async (req, res) => {
    try {
        // لیست استان‌های ایران (می‌توانید از دیتابیس یا فایل JSON بخوانید)
        const provinces = [
            "آذربایجان شرقی", "آذربایجان غربی", "اردبیل", "اصفهان", "البرز",
            "ایلام", "بوشهر", "تهران", "چهارمحال و بختیاری", "خراسان جنوبی",
            "خراسان رضوی", "خراسان شمالی", "خوزستان", "زنجان", "سمنان",
            "سیستان و بلوچستان", "فارس", "قزوین", "قم", "کردستان", "کرمان",
            "کرمانشاه", "کهگیلویه و بویراحمد", "گلستان", "گیلان", "لرستان",
            "مازندران", "مرکزی", "هرمزگان", "همدان", "یزد"
        ];

        res.status(200).json({
            success: true,
            provinces
        });
    } catch (error) {
        console.error('Get provinces error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت استان‌ها',
            error: error.message
        });
    }
};

// اعتبارسنجی کد پستی
const validatePostalCode = async (req, res) => {
    try {
        const { postal_code } = req.query;

        if (!postal_code) {
            return res.status(400).json({
                success: false,
                message: 'کد پستی وارد نشده است'
            });
        }

        const isValid = /^\d{10}$/.test(postal_code);

        res.status(200).json({
            success: true,
            isValid,
            message: isValid ? 'کد پستی معتبر است' : 'کد پستی نامعتبر است (باید ۱۰ رقم باشد)'
        });
    } catch (error) {
        console.error('Validate postal code error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در اعتبارسنجی کد پستی',
            error: error.message
        });
    }
};

module.exports = {
    getUserAddresses,
    getAddressById,
    createAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
    getProvinces,
    validatePostalCode
};
