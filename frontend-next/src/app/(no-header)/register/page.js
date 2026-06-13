"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";
import GetPasswordStrength from "@/utils/GetPasswordStrength";
import { toast } from "sonner";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "", // ✅ اضافه شد
        first_name: "",
        last_name: ""
    });
    const [rules, setRules] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // ✅ اضافه شد
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // پاک کردن خطا هنگام تایپ
        if (error) setError("");
    };

    const passwordStrength = GetPasswordStrength(formData.password);

    // ✅ بررسی تطابق رمزها
    const doPasswordsMatch = formData.password === formData.confirmPassword;
    const isPasswordValid = formData.password.length >= 8 && passwordStrength.strength >= 4;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!rules) {
            const msg = "لطفاً قوانین و مقررات را بپذیرید";
            setError(msg);
            toast.error(msg);
            return;
        }

        if (formData.password.length < 8) {
            const msg = "رمز عبور باید حداقل ۸ کاراکتر باشد";
            setError(msg);
            toast.error(msg);
            return;
        }

        if (passwordStrength.strength < 3) {
            const msg = "رمز عبور باید شامل حروف کوچک، بزرگ، عدد و کاراکتر خاص باشد";
            setError(msg);
            toast.error(msg);
            return;
        }

        if (!doPasswordsMatch) {
            const msg = "رمز عبور و تکرار آن مطابقت ندارند";
            setError(msg);
            toast.error(msg);
            return;
        }

        setIsLoading(true);
        setError("");

        const { confirmPassword, ...dataToSend } = formData;

        try {
            const res = await fetch(`${apiUrl}/api/auth/register/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend),
            });

            const data = await res.json();

            if (res.ok) {
                // هدایت به صفحه لاگین همراه با کوئری استرینگ
                router.push("/login?registered=true");
            } else {
                let errorMsg = "خطایی در ثبت‌نام رخ داد.";
                if (data.username) errorMsg = `نام کاربری: ${data.username[0]}`;
                else if (data.email) errorMsg = `ایمیل: ${data.email[0]}`;
                else if (data.password) errorMsg = `رمز عبور: ${data.password[0]}`;

                setError(errorMsg);
                toast.error(errorMsg);
            }
        } catch (err) {
            const connError = "اتصال به سرور برقرار نشد.";
            setError(connError);
            toast.error(connError);
        } finally {
            setIsLoading(false);
        }
    };

    // ✅ تابع ساخت خطا با چند خط
    const renderError = () => {
        if (!error) return null;

        // اگه خطا شامل چند خط باشه (با \n جدا شده)
        if (error.includes('\n')) {
            const errorlines = error.split('\n');
            return (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="text-red-600 text-sm font-medium text-right">
                        {errorlines.map((errorline, index) => (
                            <p key={index} className="mb-1">
                                ⚠️ {errorline}
                            </p>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-600 text-sm font-medium text-center">
                    ⚠️ {error}
                </p>
            </div>
        );
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full">
                {/* هدر */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">عضویت</h1>
                    <p className="text-gray-500 mt-2">به خانواده نکست شاپ بپیوندید</p>
                </div>

                {/* کارت فرم */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* نام و نام خانوادگی */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    نام
                                </label>
                                <input
                                    name="first_name"
                                    placeholder="علی"
                                    value={formData.first_name}
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    نام خانوادگی
                                </label>
                                <input
                                    name="last_name"
                                    placeholder="محمدی"
                                    value={formData.last_name}
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* نام کاربری */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                نام کاربری
                            </label>
                            <input
                                name="username"
                                placeholder="alimohammadi"
                                value={formData.username}
                                required
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all"
                                onChange={handleChange}
                            />
                        </div>

                        {/* ایمیل */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                ایمیل
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="info@nextshop.com"
                                value={formData.email}
                                required
                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all"
                                onChange={handleChange}
                            />
                        </div>

                        {/* رمز عبور */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                رمز عبور
                            </label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="حداقل ۸ کاراکتر"
                                    value={formData.password}
                                    required
                                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition-all"
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>

                            {/* نشانگر قدرت رمز */}
                            {formData.password && (
                                <div className="mt-2">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((level) => (
                                            <div
                                                key={level}
                                                className={`h-1 flex-1 transition-all duration-300 rounded-full ${level <= passwordStrength.strength
                                                    ? passwordStrength.strength >= 4
                                                        ? 'bg-green-500'
                                                        : passwordStrength.strength >= 3
                                                            ? 'bg-yellow-500'
                                                            : 'bg-red-500'
                                                    : 'bg-gray-200'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-xs mt-1 text-gray-500">
                                        قدرت رمز: {passwordStrength.text}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* ✅ تکرار رمز عبور */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                تکرار رمز عبور
                            </label>
                            <div className="relative">
                                <input
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="رمز عبور را دوباره وارد کنید"
                                    value={formData.confirmPassword}
                                    required
                                    className={`w-full p-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 transition-all ${formData.confirmPassword && !doPasswordsMatch
                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
                                        : formData.confirmPassword && doPasswordsMatch
                                            ? 'border-green-500 focus:border-green-500 focus:ring-green-100'
                                            : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-100'
                                        }`}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>

                            {/* پیام تطابق یا عدم تطابق رمزها */}
                            {formData.confirmPassword && (
                                <p className={`text-xs mt-1 ${doPasswordsMatch ? 'text-green-600' : 'text-red-500'
                                    }`}>
                                    {doPasswordsMatch ? '✓ رمز عبور مطابقت دارد' : '✗ رمز عبور مطابقت ندارد'}
                                </p>
                            )}
                        </div>

                        {/* نمایش خطا - با پشتیبانی از چند خط */}
                        {renderError()}

                        {/* قوانین */}
                        <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl">
                            <p className="text-sm text-gray-600">
                                با عضویت، با <Link href="/terms" className="text-emerald-600 hover:underline">قوانین</Link> موافقت می‌کنید
                            </p>
                            <input
                                onChange={(e) => setRules(e.target.checked)}
                                type="checkbox"
                                checked={rules}
                                className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer"
                            />
                        </div>

                        {/* دکمه ثبت‌نام */}
                        <button
                            disabled={isLoading || !rules || !doPasswordsMatch || (formData.password && !isPasswordValid) || !formData.password}
                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-emerald-200/50 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-2"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    در حال ثبت‌نام...
                                </span>
                            ) : (
                                "عضویت"
                            )}
                        </button>
                    </form>

                    {/* لینک ورود */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-center text-gray-600">
                            قبلاً حساب دارید؟{" "}
                            <Link
                                href="/login"
                                className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline transition-colors"
                            >
                                وارد شوید
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
