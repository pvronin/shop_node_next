"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function HeaderUser() {
    // استفاده از کانتکست احراز هویت
    const { user } = useAuth();

    return (
        <div className="hidden md:flex items-center border-r pr-3 mr-1 border-gray-200">
            <div className="flex items-center gap-4">
                <Link
                    className="text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg px-3 py-1.5 transition"
                    href={user ? "/dashboard" : "/login"}
                >
                    {/* شرط برای متن دکمه */}
                    {user ? "پنل کاربری" : "ورود / ثبت نام"}
                </Link>
            </div>
        </div>
    );
}
