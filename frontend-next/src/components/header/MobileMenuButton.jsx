"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";
import GetCategories from "@/utils/GetCategories";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";



export default function MobileMenuButton() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const [categories, setCategories] = useState([]);
    const [IsOpenCategories, setIsOpenCategories] = useState(false)


    useEffect(() => {
        GetCategories().then((data) => {
            setCategories(data);
        }).catch(console.error);
    }, []); // ← خالی بذار


    return (
        <>
            {/* دکمه باز کردن */}
            <button onClick={() => setIsOpen(true)} className="p-2 text-gray-600 lg:hidden">
                <HiMenu className="w-7 h-7" />
            </button>

            {/* بک‌دراپ تاریک پشت منو */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 min-h-screen bg-black/40 backdrop-blur-sm z-30 animate-fadeIn"
                />
            )}

            {/* پنل منو */}
            <div
                className={`
                    fixed top-0 bottom-0 right-0 w-[75%] min-h-screen
                    bg-white shadow-xl z-40 md:hidden
                    p-5 space-y-4 border-l border-gray-200

                    transform transition-all duration-300 ease-out
                    ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                `}
            >

                {/* دکمه بستن */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                >
                    <HiX className="w-7 h-7" />
                </button>



                {/* لینک‌ها */}
                <nav className="mt-4 space-y-3 text-gray-700 font-medium">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-lg hover:bg-emerald-50"
                        onClick={() => setIsOpen(false)}
                    >
                        صفحه اصلی
                    </Link>

                    <Link
                        href="/shop"
                        className="block px-3 py-2 rounded-lg hover:bg-emerald-50"
                        onClick={() => setIsOpen(false)}
                    >
                        فروشگاه
                    </Link>

                    {/* دکمه دسته‌بندی‌ها */}
                    <div>
                        <button
                            onClick={() => setIsOpenCategories(!IsOpenCategories)}
                            className="flex items-center w-full text-right px-3 py-2 rounded-lg hover:bg-emerald-50 font-bold"
                        >
                            دسته‌بندی‌ها
                            <span className="mr-2">{IsOpenCategories ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</span>
                        </button>

                        {/* لیست دسته‌بندی‌ها - بیرون از دکمه */}
                        {IsOpenCategories && (
                            <div className="mr-4 mb-6 border-r-2 border-emerald-100 pr-2 h-50 overflow-y-scroll">
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.id}
                                        href={`/shop/category/${cat.slug}`}
                                        className="block px-3 py-3 text-sm hover:bg-emerald-50 border-b-1 border-gray-100"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {user ? (
                        <button
                            onClick={() => {
                                logout();
                                setIsOpen(false);
                            }}
                            className="block w-full text-right px-3 py-2 text-red-600 font-bold hover:bg-red-50 rounded-lg"
                        >
                            خروج از حساب
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="block px-3 py-2 rounded-lg text-emerald-600 font-bold hover:bg-emerald-50"
                            onClick={() => setIsOpen(false)}
                        >
                            ورود / ثبت‌نام
                        </Link>
                    )}
                </nav>
            </div>
        </>
    );
}
