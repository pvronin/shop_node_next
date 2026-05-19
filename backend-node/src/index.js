const express = require('express');
const prisma = require('../prismadb')
require('dotenv').config();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateJWT = require('../middlewares/auth');

const app = express();
const PORT = process.env.APP_PORT || 8000;

app.use(cors()); // بدون تنظیمات خاص - اجازه دسترسی به همه
app.use(express.json());

app.get('/', (req, res) => {
    res.send("salam")
})

app.get('/api/users', async (req, res) => {
    try {
        const users = await prisma.users.findMany(); // دقت کنید: اسم مدل users هست (با s)
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/users/me', authenticateJWT, async (req, res) => {
    try {
        // 1. چک کن کاربر وجود داره
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        // 2. فقط فیلدهایی که فرستاده شدن رو آپدیت کن
        const updateData = {};

        if (req.body.first_name !== undefined) {
            updateData.first_name = req.body.first_name;
        }
        if (req.body.last_name !== undefined) {
            updateData.last_name = req.body.last_name;
        }
        if (req.body.username !== undefined) {
            updateData.username = req.body.username;
        }
        if (req.body.email !== undefined) {
            updateData.email = req.body.email;
        }
        if (req.body.phone !== undefined) {
            updateData.phone = req.body.phone;
        }

        // 3. اگه هیچ فیلدی برای آپدیت نبود
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'هیچ فیلدی برای آپدیت ارسال نشده'
            });
        }

        // 4. آپدیت با await و ذخیره نتیجه
        const updatedUser = await prisma.users.update({
            where: { id: req.user.id },
            data: updateData,
            select: {
                id: true,
                username: true,
                email: true,
                first_name: true,
                last_name: true,
                phone: true,
                role: true
            }
        });

        // 5. پاسخ موفق
        res.status(200).json({
            success: true,
            message: 'پروفایل با موفقیت به‌روزرسانی شد',
            user: updatedUser
        });

    } catch (error) {
        console.error('Update user error:', error);

        // خطای تکراری بودن username یا email
        if (error.code === 'P2002') {
            return res.status(400).json({
                success: false,
                message: 'این نام کاربری یا ایمیل قبلاً استفاده شده'
            });
        }

        res.status(500).json({
            success: false,
            message: 'خطا در به‌روزرسانی پروفایل'
        });
    }
});

// backend/routes/auth.js یا همون index.js
app.post('/api/users/me/change-password', authenticateJWT, async (req, res) => {
    try {
        const { current_password, new_password, confirm_password } = req.body;

        // 1. اعتبارسنجی اولیه
        if (!current_password || !new_password || !confirm_password) {
            return res.status(400).json({
                success: false,
                message: 'تمام فیلدها الزامی هستند'
            });
        }

        // 2. بررسی مطابقت رمز جدید و تکرار
        if (new_password !== confirm_password) {
            return res.status(400).json({
                success: false,
                message: 'رمز عبور جدید و تکرار آن مطابقت ندارند'
            });
        }

        // 3. بررسی حداقل طول رمز
        if (new_password.length < 8) {
            return res.status(400).json({
                success: false,
                message: 'رمز عبور باید حداقل ۸ کاراکتر باشد'
            });
        }

        // 4. گرفتن کاربر از دیتابیس (با رمز فعلی)
        const user = await prisma.users.findUnique({
            where: { id: req.user.id }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        // 5. بررسی رمز فعلی
        const isValid = await bcrypt.compare(current_password, user.password_hash);
        if (!isValid) {
            return res.status(401).json({
                success: false,
                message: 'رمز عبور فعلی اشتباه است'
            });
        }

        // 6. رمز جدید با رمز فعلی یکی نباشه (اختیاری)
        const isSameAsOld = await bcrypt.compare(new_password, user.password_hash);
        if (isSameAsOld) {
            return res.status(400).json({
                success: false,
                message: 'رمز جدید باید با رمز قبلی متفاوت باشد'
            });
        }

        // 7. هش کردن رمز جدید
        const salt = await bcrypt.genSalt(10);
        const newPasswordHash = await bcrypt.hash(new_password, salt);

        // 8. آپدیت در دیتابیس
        await prisma.users.update({
            where: { id: req.user.id },
            data: {
                password_hash: newPasswordHash
            }
        });

        // 9. (اختیاری) حذف توکن‌های قبلی - کاربر باید دوباره لاگین کنه
        // اگه توکن‌های قدیمی رو تو دیتابیس ذخیره میکنی، پاکشون کن

        res.status(200).json({
            success: true,
            message: 'رمز عبور با موفقیت تغییر کرد'
        });

    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در تغییر رمز عبور'
        });
    }
});

app.get('/api/users/me', authenticateJWT, async (req, res) => {
    try {
        // req.user از middleware می‌آید → شامل id کاربر است
        const user = await prisma.users.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                username: true,
                email: true,
                first_name: true,
                last_name: true,
                role: true,
                phone: true,
                created_at: true,
                is_verified: true

                // last_login_at: true,
                // هر فیلد دیگری که می‌خوای برگردونی (حساس‌ها مثل password_hash رو هرگز!)
                // مثلاً: avatar_url: true, phone: true, ...
            }
        });
        const addresses = await prisma.addresses.findMany({
            where: { user_id: req.user.id },
            select: {
                id: true,
                label: true,
                province: true,
                city: true,
                postal_code: true,
                address_line: true,
                is_default: true
            }
        })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        res.status(200).json({
            success: true,
            user,
            addresses
        });
    } catch (error) {
        console.error('Get me error:', error);
        res.status(500).json({
            success: false,
            message: 'خطای سرور',
            ...(process.env.NODE_ENV === 'development' && { error: error.message })
        });
    }
});

app.get('/api/addresses/:addressId', authenticateJWT, async (req, res) => {
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

        // پیدا کردن آدرس (فقط اگه مال همین کاربر باشه)
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

        res.status(200).json({
            success: true,
            address: address
        });

    } catch (error) {
        console.error('Error getting address:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت آدرس'
        });
    }
});

app.post('/api/users/me/addresses', authenticateJWT, async (req, res) => {
    try {
        const { id } = req.user
        const { label, province, city, postal_code, address_line, is_default } = req.body
        await prisma.addresses.create({
            data: {
                label: label,
                province: province,
                city: city,
                postal_code: postal_code,
                address_line: address_line,
                user_id: id,
                is_default: is_default
            }
        })

        res.status(200).json({
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }

})

app.delete('/api/users/me/addresses/:addressId', authenticateJWT, async (req, res) => {
    try {
        const { id: userId } = req.user;
        const { addressId } = req.params;

        // ⭐ مهم: تبدیل addressId به عدد (INT)
        const addressIdInt = parseInt(addressId);

        // بررسی اینکه addressId معتبر هست
        if (isNaN(addressIdInt)) {
            return res.status(400).json({
                success: false,
                message: 'شناسه آدرس معتبر نیست'
            });
        }

        // 1. اول آدرس رو پیدا کن (درست شده)
        const address = await prisma.addresses.findFirst({
            where: {
                user_id: userId,
                id: addressIdInt  // ⭐ اینجا مشکل داشت - باید id رو مستقیم بزنی
            }
        });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: 'آدرس پیدا نشد'
            });
        }

        // 2. اگه آدرس پیش‌فرض بود، یه آدرس دیگه رو به عنوان پیش‌فرض انتخاب کن
        if (address.is_default) {
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

        // 3. حالا آدرس رو حذف کن
        await prisma.addresses.delete({
            where: {
                id: addressIdInt
            }
        });

        res.status(200).json({
            success: true,
            message: 'آدرس با موفقیت حذف شد'
        });

    } catch (error) {
        console.error('Delete address error:', error);

        // خطای خاص پرسیما رو هندل کن
        if (error.code === 'P2003') {
            return res.status(400).json({
                success: false,
                message: 'این آدرس در حال استفاده است، ابتدا وابستگی‌ها را حذف کنید'
            });
        }

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

app.put('/api/addresses/:addressId', authenticateJWT, async (req, res) => {
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

        // اعتبارسنجی داده‌ها
        if (!label || !province || !city || !postal_code || !address_line) {
            return res.status(400).json({
                success: false,
                message: 'تمامی فیلدهای الزامی باید پر شوند'
            });
        }

        // اعتبارسنجی کد پستی (10 رقم)
        if (!/^\d{10}$/.test(postal_code)) {
            return res.status(400).json({
                success: false,
                message: 'کد پستی باید ۱۰ رقم باشد'
            });
        }

        // به روز رسانی با transaction (در صورت تغییر وضعیت پیش‌فرض)
        let updatedAddress;

        if (is_default && !existingAddress.is_default) {
            // اگر میخواد پیش‌فرض بشه و قبلاً نبوده
            await prisma.$transaction(async (prisma) => {
                // غیرفعال کردن آدرس پیش‌فرض قبلی
                await prisma.addresses.updateMany({
                    where: {
                        user_id: userId,
                        is_default: true
                    },
                    data: {
                        is_default: false
                    }
                });

                // آپدیت آدرس فعلی
                updatedAddress = await prisma.addresses.update({
                    where: { id: addressIdInt },
                    data: {
                        label,
                        province,
                        city,
                        postal_code,
                        address_line,
                        is_default: true,
                        updated_at: new Date()
                    }
                });
            });
        } else {
            // آپدیت ساده بدون تغییر پیش‌فرض
            updatedAddress = await prisma.addresses.update({
                where: { id: addressIdInt },
                data: {
                    label,
                    province,
                    city,
                    postal_code,
                    address_line,
                    is_default: is_default || false,
                    updated_at: new Date()
                }
            });
        }

        res.status(200).json({
            success: true,
            message: 'آدرس با موفقیت ویرایش شد',
            address: updatedAddress
        });

    } catch (error) {
        console.error('Error updating address:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در ویرایش آدرس'
        });
    }
});

// PATCH /api/addresses/:addressId/default
app.patch('/api/addresses/:addressId/default', authenticateJWT, async (req, res) => {
    try {
        const { id: userId } = req.user;
        const { addressId } = req.params;

        // تبدیل addressId به عدد
        const addressIdInt = parseInt(addressId);

        if (isNaN(addressIdInt)) {
            return res.status(400).json({
                success: false,
                message: 'شناسه آدرس معتبر نیست'
            });
        }

        // 1. اول بررسی کن این آدرس وجود داره و متعلق به این کاربر هست
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

        // 2. اگر همین الان پیش‌فرض هست، خطا بده
        if (address.is_default) {
            return res.status(400).json({
                success: false,
                message: 'این آدرس در حال حاضر پیش‌فرض است'
            });
        }

        // 3. با استفاده از transaction (برای اطمینان از Consistency)
        await prisma.$transaction(async (prisma) => {
            // اول همه آدرس‌های این کاربر رو غیرپیش‌فرض کن
            await prisma.addresses.updateMany({
                where: {
                    user_id: userId,
                    is_default: true
                },
                data: {
                    is_default: false
                }
            });

            // بعد آدرس مورد نظر رو به پیش‌فرض تبدیل کن
            await prisma.addresses.update({
                where: {
                    id: addressIdInt
                },
                data: {
                    is_default: true
                }
            });
        });

        // 4. گرفتن آدرس‌های به‌روز شده برای بازگشت به فرانت
        const updatedAddresses = await prisma.addresses.findMany({
            where: {
                user_id: userId
            },
            orderBy: {
                is_default: 'desc'  // آدرس پیش‌فرض اول بیاد
            }
        });

        res.status(200).json({
            success: true,
            message: 'آدرس پیش‌فرض با موفقیت تغییر کرد',
            addresses: updatedAddresses
        });

    } catch (error) {
        console.error('Error setting default address:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در تنظیم آدرس پیش‌فرض',
            error: error.message
        });
    }
});

app.get('/api/users/:id', async (req, res) => {
    const userid = req.params.id
    const user = await prisma.users.findUnique({
        where: { id: parseInt(userid) }
    })
    if (!user) {
        return res.status(404).json({ error: 'کاربر پیدا نشد' });
    }
    console.log(user);
    res.json(user)
})

app.put('/api/users', async (req, res) => {
    const userid = req.body.id
    prisma.users.update({

    })
})

app.get('/api/products', async (req, res) => {
    try {
        const {
            page = '1',
            limit = '12',
            search = '',
            category = '',
            minPrice = '',
            maxPrice = '',
            minRating = '',
            ordering = ''
        } = req.query;

        let where = {};

        // ⭐ فیلتر بر اساس slug دسته‌بندی
        if (category) {
            where.productcategories = {
                slug: category  // پیدا کردن دسته‌بندی با slug
            };
        }

        if (minRating) {
            where.rating = { gte: Number(minRating) };
        }

        if (minPrice || maxPrice) {
            where.price = {};
            if (minPrice) where.price.gte = Number(minPrice);
            if (maxPrice) where.price.lte = Number(maxPrice);
        }

        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } }
            ];
        }

        // مرتب‌سازی
        let orderBy = { id: 'desc' };
        if (ordering) {
            if (ordering.startsWith('-')) {
                const field = ordering.slice(1);
                orderBy = { [field]: 'desc' };
            } else {
                orderBy = { [ordering]: 'asc' };
            }
        }

        const pageNum = Math.max(1, Number(page));
        const limitNum = Math.min(12, Math.max(1, Number(limit)));
        const skip = (pageNum - 1) * limitNum;

        // دریافت محصولات
        const [products, total] = await Promise.all([
            prisma.products.findMany({
                where,
                orderBy,
                skip,
                take: limitNum,
                include: {
                    productcategories: {
                        select: {
                            id: true,
                            name: true,
                            slug: true  // ⭐ شامل slug هم باشه
                        }
                    },
                    discounts: {
                        where: {
                            is_active: true,
                            start_date: { lte: new Date() },
                            end_date: { gte: new Date() }
                        },
                        take: 1,
                        orderBy: { percent: 'desc' }
                    },
                    productcomments: {
                        select: {
                            id: true,
                            rating: true
                        }
                    }
                }
            }),
            prisma.products.count({ where })
        ]);

        // پردازش محصولات
        const processedProducts = products.map(product => {
            let discountedPrice, discountPercent, savings;
            const reviewsCount = product.productcomments.length;

            // محاسبه میانگین امتیاز واقعی از روی کامنت‌ها
            const avgRating = product.productcomments.length > 0
                ? product.productcomments.reduce((sum, c) => sum + c.rating, 0) / product.productcomments.length
                : product.rating || 0;

            if (product.discounts && product.discounts.length > 0) {
                const activeDiscount = product.discounts[0];
                discountPercent = activeDiscount.percent;
                const discountAmount = Number(product.price) * (discountPercent / 100);
                discountedPrice = Math.round(Number(product.price) - discountAmount);
                savings = Math.round(discountAmount);
            }

            const { productcomments, discounts, ...productWithoutExtras } = product;

            return {
                ...productWithoutExtras,
                price: Number(product.price),
                discounted_price: discountedPrice,
                discount_percent: discountPercent,
                savings: savings,
                reviews_count: reviewsCount,
                average_rating: parseFloat(avgRating.toFixed(1)),
                category: product.productcategories // اطلاعات دسته‌بندی
            };
        });

        res.json({
            products: processedProducts,
            pagination: {
                totalcount: total,
                page: pageNum,
                limit: limitNum,
                totalPages: Math.ceil(total / limitNum) || 1
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'خطای سرور داخلی' });
    }
});

app.get('/api/products/discounted', async (req, res) => {
    try {
        const {
            page = '1',
            limit = '12',
            minRating = '',
            ordering = ''
        } = req.query;

        const where = {
            discounts: {
                some: {  // ← فقط شرط فیلتر اینجا می‌مونه (بدون orderBy)
                    is_active: true,
                    start_date: { lte: new Date() },
                    end_date: { gte: new Date() }
                }
            }
        };

        if (minRating) {
            where.rating = { gte: Number(minRating) };
        }

        let orderBy = { id: 'desc' };
        if (ordering) {
            if (ordering.startsWith('-')) {
                const field = ordering.slice(1);
                orderBy = { [field]: 'desc' };
            } else {
                orderBy = { [ordering]: 'asc' };
            }
        }

        const pageNum = Math.max(1, Number(page));
        const limitNum = Math.min(12, Math.max(1, Number(limit)));
        const skip = (pageNum - 1) * limitNum;

        const [products, total] = await Promise.all([
            prisma.products.findMany({
                where,
                orderBy,
                skip,
                take: limitNum,
                include: {
                    discounts: {
                        where: {
                            is_active: true,
                            start_date: { lte: new Date() },
                            end_date: { gte: new Date() }
                        },
                        take: 1,                    // ← فقط یک تخفیف (بهترین)
                        orderBy: { percent: 'desc' } // ← orderBy اینجا مجاز است!
                    },
                    productcomments: {
                        select: {
                            id: true,
                            rating: true  // اگر میانگین امتیاز هم نیاز داری
                        }
                    }
                }
            }),
            prisma.products.count({ where })
        ]);

        // پردازش محصولات (بقیه کدت تقریباً درسته، فقط این قسمت رو چک کن)
        const processedProducts = products.map(product => {
            let discountedPrice = null;
            let discountPercent = null;
            let savings = null;

            // محاسبه تعداد نظرات (اگر include کردی)
            const reviewsCount = product.productcomments?.length || 0;

            if (product.discounts?.length > 0) {
                const activeDiscount = product.discounts[0];
                discountPercent = activeDiscount.percent;
                const discountAmount = product.price * (discountPercent / 100);
                discountedPrice = Math.round(product.price - discountAmount);
                savings = Math.round(discountAmount);
            }

            const { discounts, productcomments, ...productWithoutRelations } = product;

            return {
                ...productWithoutRelations,
                discounted_price: discountedPrice,
                discount_percent: discountPercent,
                savings,
                reviews_count: reviewsCount,
            };
        });

        res.json({
            products: processedProducts,
            pagination: {
                totalcount: total,
                page: pageNum,
                limit: limitNum,
                totalPages: Math.ceil(total / limitNum) || 1
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'خطای سرور داخلی' });
    }
});

app.get('/api/products/:id', async (req, res) => {
    const productId = parseInt(req.params.id);

    try {
        // دریافت محصول
        const product = await prisma.products.findUnique({
            where: { id: productId }
        });

        if (!product) {
            return res.status(404).json({ error: 'محصول پیدا نشد' });
        }

        let discountedPrice = product.price;
        let discountPercent = null;
        let savings = 0;

        // بررسی تخفیف فعال برای این محصول
        const activeDiscount = await prisma.discounts.findFirst({
            where: {
                product_id: productId,
                is_active: true,
                start_date: { lte: new Date() },
                end_date: { gte: new Date() }
            }
        });

        if (activeDiscount) {
            discountPercent = activeDiscount.percent;
            // محاسبه قیمت بعد از تخفیف
            const discountAmount = product.price * (discountPercent / 100);
            discountedPrice = Math.round(product.price - discountAmount); // یا floor / ceil بسته به نیاز
            savings = Math.round(discountAmount);
        }
        const comments = await prisma.productcomments.findMany({
            where: { product_id: productId }
        })

        // پاسخ نهایی
        res.json({
            ...product,
            price: product.price,                // قیمت اصلی (بدون تغییر)
            discounted_price: discountedPrice,   // قیمت نهایی (مهم‌ترین فیلد)
            discount_percent: discountPercent,   // null اگر تخفیفی نبود
            savings: savings > 0 ? savings : null, // اختیاری
            comments: comments
            // اگر نیاز داری می‌تونی discount object کامل رو هم بفرستی:
            // active_discount: activeDiscount ? activeDiscount : null
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'خطای سرور' });
    }
});



app.get('/api/discounts', async (req, res) => {
    try {
        const discounts = await prisma.discounts.findMany(); // دقت کنید: اسم مدل users هست (با s)
        res.json(discounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/api/productcategories', async (req, res) => {
    try {
        const categories = await prisma.productcategories.findMany();
        res.json(categories)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})



app.post('/api/auth/register', async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            first_name = '',   // اختیاری
            last_name = ''     // اختیاری
        } = req.body;

        // 1. چک کردن وجود تمام فیلدهای ضروری
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'نام کاربری، ایمیل و رمز عبور الزامی هستند'
            });
        }

        // 2. اعتبارسنجی ایمیل (regex ساده اما کارآمد)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'فرمت ایمیل نامعتبر است'
            });
        }

        // 3. اعتبارسنجی طول پسورد
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: 'رمز عبور باید حداقل ۸ کاراکتر باشد'
            });
        }

        // 4. چک کردن تکراری بودن (username یا email)
        const existingUser = await prisma.users.findFirst({
            where: {
                OR: [
                    { username: username.trim() },
                    { email: email.trim().toLowerCase() }
                ]
            }
        });

        if (existingUser) {
            if (existingUser.username === username.trim()) {
                return res.status(409).json({
                    success: false,
                    message: 'این نام کاربری قبلاً ثبت شده است'
                });
            }
            if (existingUser.email === email.trim().toLowerCase()) {
                return res.status(409).json({
                    success: false,
                    message: 'این ایمیل قبلاً ثبت شده است'
                });
            }
        }

        // 5. هش کردن پسورد
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 6. ایجاد کاربر جدید
        const newUser = await prisma.users.create({
            data: {
                username: username.trim(),
                email: email.trim().toLowerCase(),
                password_hash: hashedPassword,
                first_name: first_name.trim() || null,
                last_name: last_name.trim() || null,
                // اگر فیلدهای دیگری مثل created_at داری، اینجا اضافه کن
            }
        });

        // 7. پاسخ موفق (بدون ارسال پسورد!)
        res.status(201).json({
            success: true,
            message: 'ثبت‌نام با موفقیت انجام شد',
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                first_name: newUser.first_name,
                last_name: newUser.last_name
            }
        });

    } catch (error) {
        console.error('Register error:', error);

        // خطاهای Prisma معمول
        if (error.code === 'P2002') {
            return res.status(409).json({
                success: false,
                message: 'این نام کاربری یا ایمیل قبلاً استفاده شده است'
            });
        }

        res.status(500).json({
            success: false,
            message: 'خطای سرور در هنگام ثبت‌نام',
            // در تولید error.message رو نشون نده → فقط در توسعه
            ...(process.env.NODE_ENV === 'development' && { error: error.message })
        });
    }
});


app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. چک کردن وجود فیلدهای ضروری
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'ایمیل و رمز عبور الزامی هستند'
            });
        }

        // 2. پیدا کردن کاربر با ایمیل
        const user = await prisma.users.findUnique({
            where: { email: email.trim().toLowerCase() }
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'ایمیل یا رمز عبور اشتباه است'
            });
        }

        // 3. چک کردن رمز عبور
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'ایمیل یا رمز عبور اشتباه است'
            });
        }

        // 4. آپدیت زمان آخرین لاگین (اختیاری اما توصیه می‌شود)
        await prisma.users.update({
            where: { id: user.id },
            data: { last_login_at: new Date() }
            // توجه: updated_at به خاطر @updatedAt خودش اتوماتیک آپدیت می‌شود
        });

        // 5. تولید JWT
        const payload = {
            id: user.id,
            email: user.email,
            role: user.role
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
        );

        // ⭐ تنظیم کوکی HttpOnly (ایمن)
        res.cookie('access_token', token, {
            httpOnly: true,      // ← جلوگیری از دسترسی جاوااسکریپت
            secure: process.env.NODE_ENV === 'production', // ← فقط HTTPS در production
            sameSite: 'strict',  // ← جلوگیری از CSRF
            maxAge: 1 * 24 * 60 * 60 * 1000, // 7 روز (هماهنگ با expiresIn)
            path: '/',
            // domain: process.env.COOKIE_DOMAIN // در صورت نیاز
        });

        // 6. پاسخ موفق
        res.status(200).json({
            success: true,
            message: 'ورود با موفقیت انجام شد',
            token,  // ← توکن JWT
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                role: user.role
                // هر فیلد دیگه‌ای که می‌خوای (بدون password_hash!)
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'خطای سرور در هنگام ورود'
        });
    }
});


// در فایل اصلی روت‌ها (مثلاً بعد از login و register)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
