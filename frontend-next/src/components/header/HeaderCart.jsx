"use client";
import { useCartStore } from "@/store/useCartStore";
import Link from 'next/link';
import { memo } from "react";

const HeaderCart = memo(function HeaderCart() {

    const cart = useCartStore((state) => state.cart);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Link
            href="/cart"
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition relative group"
        >
            <svg className="h-6 w-6 group-hover:text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                    {totalItems > 9 ? '+9' : totalItems}
                </span>
            )}
        </Link>
    )
})

export default HeaderCart;
