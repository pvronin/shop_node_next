"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

export default function LoginPageContent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get("registered") === "true") {
            toast.success("ثبت‌نام شما با موفقیت انجام شد. حالا می‌توانید وارد شوید.");
            router.replace("/login");
        }
    }, [searchParams, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.includes("@")) {
            setError("لطفاً یک ایمیل معتبر وارد کنید");
            return;
        }
        if (password.length < 7) {
            setError("رمز عبور باید حداقل 7 کاراکتر باشد");
            return;
        }
        setIsLoading(true);
        setError("");

        const result = await login(email, password);

        if (result.success) {
            toast.success("ورود موفقیت‌آمیز بود");
            setTimeout(() => {
                router.push("/");
            }, 1200);
        } else {
            setError(result.error || "نام کاربری یا رمز عبور اشتباه است.");
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-gray-900">خوش آمدید</h2>
                    <p className="text-gray-500 mt-2">لطفاً وارد حساب کاربری خود شوید</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 mr-1">ایمیل</label>
                        <input
                            type="email"
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                            placeholder="ایمیل خود را وارد کنید"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 mr-1">رمز عبور</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all pr-12"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (error) setError("");
                                }}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium"
                            >
                                {showPassword ? "مخفی" : "نمایش"}
                            </button>
                        </div>
                    </div>
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium text-center">
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 disabled:opacity-50"
                    >
                        {isLoading ? "در حال ورود..." : "ورود به حساب"}
                    </button>
                </form>
                <div className="mt-8 text-center text-sm">
                    <p className="text-gray-600">
                        حساب کاربری ندارید؟{" "}
                        <Link href="/register" className="text-emerald-600 font-bold hover:underline">
                            همین حالا ثبت‌نام کنید
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
