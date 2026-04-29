"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiX, FiFilter } from "react-icons/fi";
import FilterSidebar from "./FilterSidebar";

export default function MobileFilterDrawer({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // برای جلوگیری از خطای hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    // قفل کردن اسکرول وقتی دراور باز است
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleShowDrawer = () => setIsOpen(!isOpen)

    return (
        <>
            {/* دکمه‌ای که به عنوان children پاس داده می‌شود */}
            <div onClick={toggleShowDrawer} className="inline-block">
                {children}
            </div>

            {/* دراور فقط در کلاینت رندر شود */}
            {mounted && createPortal(
                <div
                    className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${isOpen ? "visible" : "invisible"}`}
                >
                    {/* اوورلی تیره */}
                    <div
                        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50" : "opacity-0"}`}
                        onClick={toggleShowDrawer}
                    />

                    {/* خود دراور */}
                    <div
                        className={`absolute top-0 right-0 h-full w-full max-w-10/12 bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
                        {/* هدر دراور */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
                            <div className="flex items-center gap-2">
                                <FiFilter className="w-5 h-5 text-blue-600" />
                                <h2 className="text-lg font-bold text-gray-900">فیلتر محصولات</h2>
                            </div>
                            <button
                                onClick={toggleShowDrawer}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-300 active:scale-95"
                            >
                                <FiX className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        <div className="overflow-y-auto">
                            <FilterSidebar />
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
