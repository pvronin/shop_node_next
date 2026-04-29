// components/cart/CartItem.js

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

const CartItem = memo(function CartItem({ item, addToCart, removeFromCart, decreaseQuantity }) {
    return (
        <div className="flex items-center gap-2 md:gap-4 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            {/* تصویر */}
            <div className="w-20 md:w-25 bg-gray-50 rounded-2xl flex-shrink-0 p-1 md:p-2 relative h-20 md:h-25">
                <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="80px"
                />
            </div>

            <div className="flex-1 min-w-0 space-y-2">
                <Link href={`/product/${item.id}`}>
                    <h3 className="font-bold text-sm lg:text-base text-gray-800 truncate md:text-lg hover:text-emerald-600 transition-colors">
                        {item.title}
                    </h3>
                </Link>
                <div className="flex gap-2 items-center flex-wrap">
                    {item.discounted_price ? (
                        <>
                            <span className="text-gray-400 line-through text-sm">
                                {item.price.toLocaleString()} تومان
                            </span>
                            <span className="text-sm bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-full px-3 py-0.5">
                                {item.discounted_price.toLocaleString()} تومان
                            </span>
                        </>
                    ) : (
                        <span className="text-emerald-600 font-bold">
                            {item.price.toLocaleString()} تومان
                        </span>
                    )}
                </div>
            </div>

            {/* کنترل تعداد */}
            <div className="flex items-center gap-1 lg:gap-2 bg-gray-100 px-2 py-1.5 lg:px-4 lg:py-2 rounded-2xl">
                <button
                    onClick={() => addToCart(item, 1)}
                    className="md:text-2xl font-bold text-emerald-600 hover:scale-125 transition-transform px-2"
                    aria-label="افزایش تعداد"
                >
                    +
                </button>
                <span className="font-black md:text-lg md:w-6 text-center">{item.quantity}</span>
                <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="md:text-2xl font-bold text-red-500 hover:scale-125 transition-transform px-2"
                    aria-label="کاهش تعداد"
                >
                    −
                </button>
            </div>

            {/* دکمه حذف */}
            <button
                onClick={() => removeFromCart(item.id)}
                className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                aria-label="حذف از سبد خرید"
            >
                <svg className="h-4 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    );
});

export default CartItem;
