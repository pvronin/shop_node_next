const prisma = require('../../../prismadb');

// دریافت لیست محصولات با فیلترها و صفحه‌بندی
const getProducts = async (req, res) => {
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

        // فیلتر بر اساس slug دسته‌بندی
        if (category) {
            where.productcategories = {
                slug: category
            };
        }

        // فیلتر بر اساس حداقل امتیاز
        if (minRating) {
            where.rating = { gte: Number(minRating) };
        }

        // فیلتر قیمت
        if (minPrice || maxPrice) {
            where.price = {};
            if (minPrice) where.price.gte = Number(minPrice);
            if (maxPrice) where.price.lte = Number(maxPrice);
        }

        // جستجو در عنوان و توضیحات
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
                            slug: true
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

            // محاسبه میانگین امتیاز
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
                category: product.productcategories
            };
        });

        res.json({
            success: true,
            products: processedProducts,
            pagination: {
                totalcount: total,
                page: pageNum,
                limit: limitNum,
                totalPages: Math.ceil(total / limitNum) || 1
            }
        });

    } catch (error) {
        console.error('Get products error:', error);
        res.status(500).json({
            success: false,
            message: 'خطای سرور داخلی',
            error: error.message
        });
    }
};

// دریافت محصولات تخفیف‌دار
const getDiscountedProducts = async (req, res) => {
    try {
        const {
            page = '1',
            limit = '12',
            minRating = '',
            ordering = ''
        } = req.query;

        const where = {
            discounts: {
                some: {
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
                        take: 1,
                        orderBy: { percent: 'desc' }
                    },
                    productcomments: {
                        select: {
                            id: true,
                            rating: true
                        }
                    },
                    productcategories: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    }
                }
            }),
            prisma.products.count({ where })
        ]);

        const processedProducts = products.map(product => {
            let discountedPrice = null;
            let discountPercent = null;
            let savings = null;

            const reviewsCount = product.productcomments?.length || 0;

            const avgRating = product.productcomments?.length > 0
                ? product.productcomments.reduce((sum, c) => sum + c.rating, 0) / product.productcomments.length
                : product.rating || 0;

            if (product.discounts?.length > 0) {
                const activeDiscount = product.discounts[0];
                discountPercent = activeDiscount.percent;
                const discountAmount = Number(product.price) * (discountPercent / 100);
                discountedPrice = Math.round(Number(product.price) - discountAmount);
                savings = Math.round(discountAmount);
            }

            const { discounts, productcomments, ...productWithoutRelations } = product;

            return {
                ...productWithoutRelations,
                price: Number(product.price),
                discounted_price: discountedPrice,
                discount_percent: discountPercent,
                savings,
                reviews_count: reviewsCount,
                average_rating: parseFloat(avgRating.toFixed(1))
            };
        });

        res.json({
            success: true,
            products: processedProducts,
            pagination: {
                totalcount: total,
                page: pageNum,
                limit: limitNum,
                totalPages: Math.ceil(total / limitNum) || 1
            }
        });
    } catch (error) {
        console.error('Get discounted products error:', error);
        res.status(500).json({
            success: false,
            message: 'خطای سرور داخلی',
            error: error.message
        });
    }
};

// دریافت یک محصول خاص با جزئیات کامل
// دریافت یک محصول خاص با جزئیات کامل
const getProductById = async (req, res) => {
    const productId = parseInt(req.params.id);

    try {
        // دریافت محصول
        const product = await prisma.products.findUnique({
            where: { id: productId }
        });

        if (!product) {
            return res.status(404).json({ error: 'محصول پیدا نشد' });
        }

        let discountedPrice = Number(product.price);
        let discountPercent = null;
        let savings = 0;

        // بررسی تخفیف فعال
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
            const discountAmount = Number(product.price) * (discountPercent / 100);
            discountedPrice = Math.round(Number(product.price) - discountAmount);
            savings = Math.round(discountAmount);
        }

        // دریافت نظرات محصول (بدون relation به users)
        const comments = await prisma.productcomments.findMany({
            where: { product_id: productId },
            orderBy: { date: 'desc' }  // توجه: فیلد date است
        });

        // پاسخ نهایی
        res.json({
            success: true,
            ...product,
            price: Number(product.price),
            discounted_price: discountedPrice,
            discount_percent: discountPercent,
            savings: savings > 0 ? savings : null,
            comments: comments
        });
    } catch (error) {
        console.error('Get product by id error:', error);
        res.status(500).json({ error: 'خطای سرور' });
    }
};

// دریافت دسته‌بندی‌های محصولات
const getCategories = async (req, res) => {
    try {
        const categories = await prisma.productcategories.findMany();
        res.json(categories)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// دریافت محصولات مرتبط (بر اساس دسته‌بندی)
const getRelatedProducts = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const limit = parseInt(req.query.limit) || 4;

        if (isNaN(productId)) {
            return res.status(400).json({
                success: false,
                message: 'شناسه محصول معتبر نیست'
            });
        }

        // پیدا کردن محصول اصلی
        const product = await prisma.products.findUnique({
            where: { id: productId },
            select: { category_id: true }
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'محصول پیدا نشد'
            });
        }

        // پیدا کردن محصولات مرتبط در همان دسته
        const relatedProducts = await prisma.products.findMany({
            where: {
                category_id: product.category_id,
                id: { not: productId },
                status: 'active'
            },
            include: {
                discounts: {
                    where: {
                        is_active: true,
                        start_date: { lte: new Date() },
                        end_date: { gte: new Date() }
                    },
                    take: 1
                }
            },
            take: limit,
            orderBy: { created_at: 'desc' }
        });

        // پردازش محصولات مرتبط
        const processedRelated = relatedProducts.map(p => {
            let discountedPrice = null;
            let discountPercent = null;

            if (p.discounts?.length > 0) {
                discountPercent = p.discounts[0].percent;
                const discountAmount = Number(p.price) * (discountPercent / 100);
                discountedPrice = Math.round(Number(p.price) - discountAmount);
            }

            const { discounts, ...productData } = p;
            return {
                ...productData,
                price: Number(p.price),
                discounted_price: discountedPrice,
                discount_percent: discountPercent
            };
        });

        res.json({
            success: true,
            products: processedRelated
        });
    } catch (error) {
        console.error('Get related products error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت محصولات مرتبط'
        });
    }
};

// کامنت گذاشتن برای محصول
// اضافه کردن کامنت جدید برای محصول
// کامنت گذاشتن برای محصول
const addComment = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const userId = req.user.id;  // این رو داریم برای گرفتن اطلاعات کاربر
        const { rating, comment } = req.body;

        // 1. اعتبارسنجی ورودی‌ها
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'کاربر معتبر نیست. ثبت نام و ورود الزامی است'
            });
        }

        if (!rating || !comment) {
            return res.status(400).json({
                success: false,
                message: 'امتیاز و نظر هر دو الزامی هستند'
            });
        }

        // 2. اعتبارسنجی امتیاز (بین 1 تا 5)
        const ratingNumber = parseInt(rating);
        if (ratingNumber < 1 || ratingNumber > 5) {
            return res.status(400).json({
                success: false,
                message: 'امتیاز باید بین ۱ تا ۵ باشد'
            });
        }

        // 3. اعتبارسنجی طول نظر
        if (comment.length < 5 || comment.length > 1000) {
            return res.status(400).json({
                success: false,
                message: 'نظر شما باید حداقل 5 کاراکتر و حداکثر 1000 کاراکتر باشد'
            });
        }

        // 4. بررسی وجود محصول
        const product = await prisma.products.findUnique({
            where: { id: productId }
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'محصول مورد نظر یافت نشد'
            });
        }

        // 5. گرفتن اطلاعات کاربر از دیتابیس
        const user = await prisma.users.findUnique({
            where: { id: userId },
            select: {
                username: true,
                email: true,
                first_name: true,
                last_name: true
            }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'کاربر یافت نشد'
            });
        }

        // ساخت نام نمایشی برای نظر
        const reviewerName = user.first_name && user.last_name
            ? `${user.first_name} ${user.last_name}`.trim()
            : user.username || user.email.split('@')[0];

        // 6. بررسی اینکه کاربر قبلاً برای این محصول نظر داده یا نه (بر اساس ایمیل)
        const existingComment = await prisma.productcomments.findFirst({
            where: {
                product_id: productId,
                reviewer_email: user.email  // استفاده از ایمیل برای بررسی تکراری
            }
        });

        if (existingComment) {
            return res.status(400).json({
                success: false,
                message: 'شما قبلاً برای این محصول نظر داده‌اید. می‌توانید نظر خود را ویرایش کنید'
            });
        }

        // 7. ایجاد نظر جدید (بدون relation به users)
        const newComment = await prisma.productcomments.create({
            data: {
                product_id: productId,
                reviewer_name: reviewerName,
                reviewer_email: user.email,
                rating: ratingNumber,
                comment: comment.trim(),
                date: new Date()  // توجه: فیلد date است نه created_at
            }
        });

        // 8. بروزرسانی میانگین امتیازات محصول
        const allComments = await prisma.productcomments.findMany({
            where: { product_id: productId },
            select: { rating: true }
        });

        const totalRating = allComments.reduce((sum, c) => sum + c.rating, 0);
        const averageRating = allComments.length > 0
            ? totalRating / allComments.length
            : ratingNumber;

        // بروزرسانی فیلد rating در محصول
        await prisma.products.update({
            where: { id: productId },
            data: {
                rating: parseFloat(averageRating.toFixed(1))
            }
        });

        // 9. پاسخ موفق
        res.status(201).json({
            success: true,
            message: 'نظر شما با موفقیت ثبت شد',
            comment: {
                id: newComment.id,
                reviewer_name: newComment.reviewer_name,
                reviewer_email: newComment.reviewer_email,
                rating: newComment.rating,
                comment: newComment.comment,
                date: newComment.date
            }
        });

    } catch (error) {
        console.error('Add comment error:', error);

        // خطای duplicate (اگر unique constraint داشته باشید)
        if (error.code === 'P2002') {
            return res.status(400).json({
                success: false,
                message: 'شما قبلاً برای این محصول نظر داده‌اید'
            });
        }

        res.status(500).json({
            success: false,
            message: 'خطا در ثبت نظر',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

module.exports = {
    getProducts,
    getDiscountedProducts,
    getProductById,
    getCategories,
    getRelatedProducts,
    addComment
};
