"use client";

import { useCartStore } from "@/store/useCartStore";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export default function AddToCartButton({ item }) {
    const addToCart = useCartStore((state) => state.addToCart);
    const [isAdding, setIsAdding] = useState(false);


    const handleAddToCart = useCallback(async (e) => {
        e.preventDefault();
        e.stopPropagation();

        setIsAdding(true);
        await new Promise(resolve => setTimeout(resolve, 400));
        addToCart(item, 1);
        toast.success("محصول به سبد اضافه شد")
        setIsAdding(false);
    }, [item, addToCart]);

    return (
        <button
            onClick={handleAddToCart}
            disabled={item.stock <= 0}
            className={`relative overflow-hidden ${item.stock <= 0
                ? 'bg-gray-300 cursor-not-allowed'
                : item.discounted_price
                    ? 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-600'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
                } text-white w-9 h-9 lg:w-11 lg:h-11 rounded-lg md:rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg my-1`}
            title={item.stock <= 0 ? "ناموجود" : "افزودن به سبد خرید"}
        >
            <div className={`transition-all duration-300 ${isAdding ? 'scale-0' : 'scale-100'}`}>
                {item.stock <= 0 ? (
                    <svg className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ) : (
                    <svg className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                )}
            </div>
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isAdding ? 'scale-100' : 'scale-0'}`}>
                <svg className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </button>
    )
}
