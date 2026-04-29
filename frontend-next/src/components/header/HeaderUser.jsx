"use client";
import Link from "next/link"
import { useAuth } from "@/context/AuthContext";

export default function HeaderUser() {
    // ۱. استفاده از کانتکست احراز هویت
    const { user, logout } = useAuth();

    return (
        <div className="hidden md:flex items-center border-r pr-3 mr-1 border-gray-200">
            {
                user ? (
                    <div className="flex items-center gap-4">
                        <Link className="text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-3 py-1.5 transition" href="/dashboard">پنل کاربری</Link>
                        <button
                            onClick={logout}
                            className="text-xs bg-red-50 text-red-600 px-3 py-1.5 rounded-lg font-bold hover:bg-red-100 transition"
                        >
                            خروج
                        </button>
                    </div>
                ) : (
                    <Link
                        href="/login"
                        className="text-sm bg-gray-900 text-white px-5 py-2 rounded-xl font-bold hover:bg-emerald-600 transition shadow-sm"
                    >
                        ورود / ثبت‌نام
                    </Link>
                )
            }
        </div>
    )
}
