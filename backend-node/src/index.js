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
            ordering = ''          // ← حالا از فرانت می‌آید
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

        // جستجو
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                // اگر description داری اضافه کن:
                // { description: { contains: search, mode: 'insensitive' } }
            ];
        }

        // مرتب‌سازی (پشتیبانی از فرمت Django-like: -price یعنی نزولی)
        let orderBy = { id: 'desc' }; // پیش‌فرض

        if (ordering) {
            if (ordering.startsWith('-')) {
                const field = ordering.slice(1);
                orderBy = { [field]: 'desc' };
            } else {
                orderBy = { [ordering]: 'asc' };
            }
        }

        const pageNum = Math.max(1, Number(page));
        const limitNum = Math.min(50, Math.max(1, Number(limit))); // امنیت
        const skip = (pageNum - 1) * limitNum;

        const [products, total] = await Promise.all([
            prisma.products.findMany({
                where,
                orderBy,
                skip,
                take: limitNum,
            }),
            prisma.products.count({ where })
        ]);

        res.json({
            products,
            pagination: {
                totalcount: total,          // ← دقیقاً هم‌نامی با چیزی که فرانت انتظار داره
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
                role: true,          // اگر فیلد role داری
                created_at: true,
                last_login_at: true,
                // هر فیلد دیگری که می‌خوای برگردونی (حساس‌ها مثل password_hash رو هرگز!)
                // مثلاً: avatar_url: true, phone: true, ...
            }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        res.status(200).json({
            success: true,
            user
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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
