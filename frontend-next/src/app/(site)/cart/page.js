"use client";

import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import CartSummary from "@/components/cart/CartSummary";
import CartItem from "@/components/cart/CartItem";
import { FaTrashAlt } from "react-icons/fa";

export default function CartPage() {
    const { cart, removeFromCart, addToCart, decreaseQuantity, clearCart, getTotalPrice } = useCartStore();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
                <div className="text-8xl">🛍️</div>
                <h2 className="text-2xl font-bold text-gray-800">سبد خرید شما فعلاً خالی است!</h2>
                <Link href="/shop" className="bg-emerald-600 text-white px-8 py-3 rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 font-bold">
                    مشاهده محصولات فروشگاه
                </Link>
            </div>
        );
    }

    // ✅ محاسبات تکراری رو یه بار انجام بده
    const totalItems = cart.reduce((a, c) => a + c.quantity, 0);
    const totalPrice = getTotalPrice();
    const shippingCost = totalPrice >= 500000 ? 0 : 100000; // ✅ فرض کن 500 هزار تومان
    const finalPrice = totalPrice + shippingCost;

    return (
        <div className="mx-auto px-4 py-10 container">
            <h1 className="text-3xl font-black mb-10 text-gray-900 border-s-4 border-emerald-600 pr-4">
                سبد خرید شما
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* لیست محصولات */}
                <div className="lg:col-span-3 space-y-4">
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            decreaseQuantity={decreaseQuantity}
                        />
                    ))}

                    <div className="flex justify-start">
                        <button
                            onClick={clearCart}
                            className="text-lg font-medium text-red-500 hover:text-white group border hover:bg-red-500 rounded-2xl transition-colors flex items-center justify-center gap-2 p-3 w-full"
                        >
                            <FaTrashAlt className="text-gray-500 group-hover:text-white" />
                            خالی کردن سبد
                        </button>
                    </div>
                </div>

                {/* بخش فاکتور پرداخت */}
                <CartSummary
                    totalItems={totalItems}
                    totalPrice={totalPrice}
                    shippingCost={shippingCost}
                    finalPrice={finalPrice}
                />
            </div>
        </div>
    );
}
