import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import AnimationLottieShop from "@/components/AnimationLottieShop";
import ProductsSectionSlider from "@/components/ProductsSectionSlider";
import discount_banner2 from "@/assets/img/discount_banner2.png";
import GetProducts from "@/utils/GetProducts";
import Alert from "@/components/Alert";

// ✅ فقط دومی رو لایزالود کن (چون پایین صفحه است)
const LazyProductsSection = dynamic(
    () => import("@/components/ProductsSectionSlider"),
    {
        loading: () => (
            <div className="container mx-auto py-16 px-4">
                <div className="h-96 bg-gray-100 rounded-xl animate-pulse" />
            </div>
        ),
        ssr: true, // خوب هست
    }
);

export async function generateMetadata() {
    return {
        title: 'فروشگاه نکست شاپ',
        description: 'فروشگاه نکست شاپ فروشگاه آینده شامل هرمحصولی که بخوای',
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function HomePage() {
    const data = await GetProducts("page=1");
    const products = data.products.slice(0, 8);
    return (
        <div>
            {
                <Alert message={"به علت تستی بودن سایت ممکن است بعضی مشکلات باشد که مربوط به این است که روی سرور واقعی نیست یا تصاویر کالا ها وابسته ای پی ای های خارجی هستند و نیاز به ویپی ان ممکن است داشته باشن. همچنین به علت در نظر گرفتن نیاز های سئو در نکست خیلی دستم بسته بود و سعی کردم سئو شدن و سرور ساید موندن اکثر صفحاتو کامپوننت هارو رعایت کنم."} />
            }
            {/* Hero Section - بدون تغییر */}
            <section className="min-h-screen relative flex flex-col-reverse md:flex-row items-center gap-10 -mt-10 text-white pb-22 px-6 md:p-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
                    <div className="absolute inset-0 opacity-20">
                        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
                            <path fill="white" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                        </svg>
                    </div>
                    <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-40"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="relative z-10 md:w-1/2">
                    <h1 className="text-2xl lg:text-5xl font-bold">به فروشگاه ما خوش آمدید</h1>
                    <p className="md:text-lg mt-4 text-blue-100">جدیدترین محصولات را در صفحه فروشگاه ببینید</p>
                    <Link href="/shop" className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
                        ورود به فروشگاه
                    </Link>
                </div>
                <div className="relative z-10 md:w-1/2">
                    <AnimationLottieShop />
                </div>
            </section>

            {/* بخش اول - عادی (نیازی به لایزالود نیست چون بالاست) */}
            <ProductsSectionSlider
                title="جدیدترین محصولات"
                products={products}
            />

            {/* بنر تخفیف */}
            <section className="w-full">
                <Link href="shop/discounted">
                    <Image
                        className="w-full"
                        src={discount_banner2}
                        alt="discount_banner"
                        priority={false}
                    />
                </Link>
            </section>

            {/* ✅ بخش دوم - لایزالود (چون پایین صفحه است) */}
            <LazyProductsSection
                title="پربازدیدترین محصولات"  // ← رفع شد: "1 جدیدترین محصولات"
                products={products}
            />
        </div>
    );
}
