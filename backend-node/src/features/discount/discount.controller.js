const prisma = require('../../../prismadb');

// دریافت همه تخفیف‌های فعال
const getDiscounts = async (req, res) => {
    try {
        const discounts = await prisma.discounts.findMany(); // دقت کنید: اسم مدل users هست (با s)
        res.json(discounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// دریافت یک تخفیف خاص با محصولاتش
const getDiscountById = async (req, res) => {
    try {
        const discountId = parseInt(req.params.id);

        if (isNaN(discountId)) {
            return res.status(400).json({
                success: false,
                message: 'شناسه تخفیف معتبر نیست'
            });
        }

        const discount = await prisma.discounts.findUnique({
            where: { id: discountId },
            include: {
                products: {
                    include: {
                        productcategories: {
                            select: {
                                name: true,
                                slug: true
                            }
                        }
                    }
                }
            }
        });

        if (!discount) {
            return res.status(404).json({
                success: false,
                message: 'تخفیف پیدا نشد'
            });
        }

        // محاسبه قیمت‌های تخفیف‌خورده برای هر محصول
        const productsWithDiscount = discount.products.map(product => {
            const discountAmount = Number(product.price) * (discount.percent / 100);
            const discountedPrice = Math.round(Number(product.price) - discountAmount);

            return {
                ...product,
                original_price: Number(product.price),
                discounted_price: discountedPrice,
                savings: Math.round(discountAmount)
            };
        });

        res.json({
            success: true,
            discount: {
                ...discount,
                products: productsWithDiscount
            }
        });
    } catch (error) {
        console.error('Get discount by id error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت تخفیف',
            error: error.message
        });
    }
};

// دریافت آمار تخفیف‌ها (برای ادمین)
const getDiscountsStats = async (req, res) => {
    try {
        const currentDate = new Date();

        const [total, active, expired, upcoming] = await Promise.all([
            prisma.discounts.count(),
            prisma.discounts.count({
                where: {
                    is_active: true,
                    start_date: { lte: currentDate },
                    end_date: { gte: currentDate }
                }
            }),
            prisma.discounts.count({
                where: {
                    OR: [
                        { end_date: { lt: currentDate } },
                        { is_active: false }
                    ]
                }
            }),
            prisma.discounts.count({
                where: {
                    start_date: { gt: currentDate },
                    is_active: true
                }
            })
        ]);

        const avgDiscount = await prisma.discounts.aggregate({
            where: {
                is_active: true,
                start_date: { lte: currentDate },
                end_date: { gte: currentDate }
            },
            _avg: {
                percent: true
            }
        });

        res.json({
            success: true,
            stats: {
                total,
                active,
                expired,
                upcoming,
                average_discount_percent: Math.round(avgDiscount._avg.percent || 0)
            }
        });
    } catch (error) {
        console.error('Get discounts stats error:', error);
        res.status(500).json({
            success: false,
            message: 'خطا در دریافت آمار تخفیف‌ها',
            error: error.message
        });
    }
};

module.exports = {
    getDiscounts,
    getDiscountById,
    getDiscountsStats
};
