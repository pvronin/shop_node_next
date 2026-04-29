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
        const { id } = req.user
        const { addressId } = req.params
        await prisma.addresses.delete({
            where: {
                id: addressId,
            }
        })

        res.status(200).json({
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

})

app.put('/api/users/me/:addressid', authenticateJWT, async (req, res) => {
    prisma.addresses.findUnique({
        where: {

        },

    })
})

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

        const where = {};

        if (category) {
            where.category_relation_id = Number(category);
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

        // دریافت محصولات به همراه تخفیف‌های فعال
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
                        take: 1, // فقط اولین تخفیف فعال (اگه چندتا داشته باشه)
                        orderBy: { percent: 'desc' } // بزرگترین درصد تخفیف
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

        // پردازش محصولات و اضافه کردن قیمت با تخفیف
        const processedProducts = products.map(product => {
            let discountedPrice
            let discountPercent
            let savings
            // محاسبه تعداد نظرات
            const reviewsCount = product.productcomments.length;

            // اگه تخفیف فعال داره
            if (product.discounts && product.discounts.length > 0) {
                const activeDiscount = product.discounts[0];
                discountPercent = activeDiscount.percent;
                const discountAmount = product.price * (discountPercent / 100);
                discountedPrice = Math.round(product.price - discountAmount);
                savings = Math.round(discountAmount);
            }

            // حذف discounts از آبجکت نهایی (اگه نمی‌خوای بفرستی)
            const { productcomments, discounts, ...productWithoutDiscounts } = product;

            return {
                ...productWithoutDiscounts,
                discounted_price: discountedPrice,
                discount_percent: discountPercent,
                savings: savings,
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
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );

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
                last_name: user.last_name
                // هر فیلد دیگه‌ای که می‌خوای (بدون password_hash!)
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'خطای سرور در هنگام ورود',
            ...(process.env.NODE_ENV === 'development' && { error: error.message })
        });
    }
});


// در فایل اصلی روت‌ها (مثلاً بعد از login و register)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
