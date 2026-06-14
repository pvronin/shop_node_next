
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import dynamic from "next/dynamic";
import HeartIcon from "./HeartIcon";
import CompareIcon from "./CompareIcon";
import Image from "next/image";
import { memo } from "react";
import AddToFavoriteBtn from "./AddToFavoriteBtn";

const RatingStars = dynamic(() => import("./RatingStars"), {
    ssr: true, // SSR فعال باشه برای SEO
    loading: () => <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded-full animate-pulse" />
        ))}
    </div>
});


const ProductCard = ({ item }) => {
    const stockStatus = (() => {
        if (item.stock <= 0) return { label: 'ناموجود', className: 'bg-gray-800' };
        if (item.stock < 5) return { label: 'موجودی کم', className: 'bg-amber-500' };
        if (item.discounted_price) return { label: `${item.discount_percent}%`, className: 'bg-gradient-to-r from-red-500 to-pink-500' };
        return null;
    })();

    return (
        <div
            className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
        >
            {/* لیبل وضعیت */}
            {stockStatus && (
                <div className="absolute top-2 md:top-4 left-2 md:left-4 z-10">
                    <span className={`${stockStatus.className} text-white text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-sm`}>
                        {stockStatus.label}
                    </span>
                </div>
            )}

            <div className={"absolute top-4 right-4 z-10 flex flex-col gap-2 transition-all duration-300 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}>
                <AddToFavoriteBtn product={item} />
                <button className="w-8 h-8 md:w-9 md:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all hover:bg-white p-1.5 md:p-2">
                    <CompareIcon />
                </button>
            </div>


            <Link href={`/product/${item.id}`}>
                {/* تصویر */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    {/* <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className={`h-full w-full object-contain transition-all duration-500`}
                        loading="lazy"
                    /> */}

                    <img
                        src={item.thumbnail || "/img/altproduct.jpg"}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-contain transition-all duration-500"
                        title={item.title}
                    />

                </div>

                {/* اطلاعات */}
                <div className="p-3 md:p-4 lg:p-5">

                    {/* عنوان */}
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 md:mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                    </h3>

                    {/* رتبه‌بندی */}
                    <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3 lg:mb-4">
                        <div className="flex">
                            <RatingStars rating={item.rating || 0} />
                        </div>

                        <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                        <span className="text-xs text-gray-500">
                            {item.reviews_count || 0} نظر
                        </span>

                    </div>

                    {/* قیمت و دکمه */}
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            {item.discounted_price ? (
                                <>
                                    <div className="flex items-center gap-1 md:gap-2">
                                        <span className="text-lg xl:text-xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                                            {Number(item.discounted_price).toLocaleString()} تومان
                                        </span>
                                    </div>
                                    <span className="text-[10px] xl:text-xs text-gray-400 line-through">
                                        {Number(item.price).toLocaleString()} تومان
                                    </span>
                                </>
                            ) : (
                                <div className="flex items-end gap-0.5 md:gap-1">
                                    <span className="text-lg font-black text-gray-900">
                                        {Number(item.price).toLocaleString()} <span className="text-gray-500 text-xs">تومان</span>
                                    </span>

                                </div>
                            )}
                        </div>

                        {/* دکمه سبد خرید */}
                        <AddToCartButton item={item} />
                    </div>
                </div>
            </Link>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        </div>
    );
}

export default memo(ProductCard)
