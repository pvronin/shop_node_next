import AddProductComment from "@/components/AddProductComment";
import AddToCartSection from "@/components/AddToCartSection";
import RatingStars from "@/components/RatingStars";
import GetProduct from "@/utils/GetProduct";
import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound } from "next/navigation";

// const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

const CommentsSection = dynamic(
    () => import("@/components/CommentsSection"),
    {
        loading: () => (
            <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="h-24 bg-gray-100 rounded-xl" />
                    </div>
                ))}
            </div>
        ),
    }
);

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = await GetProduct(id);

    if (!product) return { title: "محصول یافت نشد" };

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description
        },
    };
}


export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = await GetProduct(id);

    if (!product) notFound();

    // استخراج داده‌های متا
    const meta = product.meta || {};
    const dimensions = product.dimensions || {};
    const hasDiscount = product.discounted_price && product.discounted_price !== product.price;

    return (
        <div className="container mx-auto p-4">
            {/* هدر محصول */}
            <div className="mb-6">
                <h1 className="md:text-4xl font-bold text-gray-900">{product.title}</h1>
                <div className="flex items-center gap-4 mt-2 text-xs sm:text-base">
                    <div>
                        <RatingStars rating={product.rating || 0} />
                    </div>
                    <span className="text-gray-500">({product.comments.length || 0} نظر)</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">کد محصول: {product.id}</span>
                </div>
            </div>

            {/* بخش اصلی محصول */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* گالری تصاویر */}
                <div className="space-y-4">
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-8">
                        {/* <Image
                            src={product.thumbnail || "/img/altproduct.jpg"}
                            alt={product.title}
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-300"
                            priority
                        /> */}
                        <img
                            src={product.thumbnail || "/img/altproduct.jpg"}
                            alt={product.title}
                            loading="lazy"
                            className="object-contain hover:scale-105 transition-transform duration-300 w-full h-full"
                            title={product.title}
                        />
                    </div>

                    {/* بارکد و QR */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">بارکد محصول</div>
                                <div className="font-mono text-sm">{meta.barcode || '1255669555958'}</div>
                            </div>
                        </div>
                        {meta.Code && (
                            <div className="text-center">
                                <div className="text-xs text-gray-500 mb-1">اسکن کنید</div>
                                <Image src={meta.Code} alt="QR Code" height={64} width={64} />
                            </div>
                        )}
                    </div>
                </div>

                {/* اطلاعات محصول */}
                <div className="space-y-8">
                    {/* وضعیت موجودی و قیمت */}
                    <div className="bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl border border-gray-200">
                        <div className="flex justify-between items-center mb-4">

                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base ${product.stock > 0 ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
                                <div className={`w-2 h-2 rounded-full ${product.stock > 0 ? "bg-emerald-500" : "bg-red-500"}`}></div>
                                {product.stock > 0 ? `موجود (${product.stock} عدد)` : "ناموجود"}
                            </div>

                            <div className="text-right">
                                <div className="text-xl md:text-3xl font-black text-blue-600">
                                    {product.discounted_price.toLocaleString()} <span className="text-sm">تومان</span>
                                </div>

                                {product.discounted_price != product.price && product.price && (
                                    <div className="text-base text-gray-500 line-through mt-1">
                                        {product.price.toLocaleString()}
                                    </div>
                                )}
                            </div>
                        </div>

                        <AddToCartSection product={product} />
                    </div>

                    {/* ابعاد و مشخصات */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">مشخصات فنی</h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                                <div className="text-2xl font-bold text-blue-600 mb-1">{dimensions.width || '23.23'}</div>
                                <div className="text-sm text-gray-500">عرض (میلی‌متر)</div>
                            </div>

                            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                                <div className="text-2xl font-bold text-blue-600 mb-1">{dimensions.height || '7.19'}</div>
                                <div className="text-sm text-gray-500">ارتفاع (میلی‌متر)</div>
                            </div>

                            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                                <div className="text-2xl font-bold text-blue-600 mb-1">{dimensions.depth || '28.95'}</div>
                                <div className="text-sm text-gray-500">عمق (میلی‌متر)</div>
                            </div>

                            <div className="text-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                                <div className="text-2xl font-bold text-blue-600 mb-1">ساعت</div>
                                <div className="text-sm text-gray-500">نوع محصول</div>
                            </div>
                        </div>
                    </div>

                    {/* خدمات اضافی */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl border border-blue-100 flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                                <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1v-4a1 1 0 00-.293-.707l-2-2A1 1 0 0018 8h-2V5a1 1 0 00-1-1H3zm11 4h2l1 1v2h-3V8z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">ارسال رایگان</div>
                                <div className="text-sm text-gray-600">برای خریدهای بالای ۵۰۰ هزار تومان</div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-50 to-white p-4 rounded-xl border border-emerald-100 flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-lg">
                                <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">گارانتی ۲۴ ماهه</div>
                                <div className="text-sm text-gray-600">ضمانت بازگشت کالا</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* توضیحات محصول */}
            <div className="bg-white p-6 mb-10 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    توضیحات محصول
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {product.description}
                </p>
            </div>

            {/* بخش نظرات */}
            <div className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl border border-gray-200 mb-8 space-y-16">

                <div>
                    <h2>اضافه کردن نظر</h2>
                    <AddProductComment productId={id} />
                </div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        نظرات کاربران
                    </h2>
                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold">
                        {product.comments?.length || 0} نظر
                    </div>
                </div>

                <CommentsSection comments={product.comments} key={product.comments.id} />
            </div>
        </div>
    );
}
