// app/dashboard/change-password/page.js
"use client";
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { FiLock, FiEye, FiEyeOff, FiCheckCircle, FiXCircle } from 'react-icons/fi';

export default function ChangePasswordPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        current_password: '',
        new_password: '',
        confirm_password: ''
    });
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // اعتبارسنجی قدرت رمز
    const getPasswordStrength = (password) => {
        if (!password) return { strength: 0, text: '' };

        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (password.match(/[a-z]+/)) strength += 1;
        if (password.match(/[A-Z]+/)) strength += 1;
        if (password.match(/[0-9]+/)) strength += 1;
        if (password.match(/[$@#&!]+/)) strength += 1;

        const strengthText = ['خیلی ضعیف', 'ضعیف', 'متوسط', 'خوب', 'عالی'];
        return { strength, text: strengthText[strength - 1] || '' };
    };

    const passwordStrength = getPasswordStrength(form.new_password);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setMessage({ type: '', text: '' });
    };

    const toggleShowPassword = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const token = Cookies.get('access_token');

            const response = await axios.post(
                'http://127.0.0.1:8000/api/users/me/change-password',
                form,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.success) {
                setMessage({
                    type: 'success',
                    text: 'رمز عبور با موفقیت تغییر کرد. لطفاً دوباره وارد شوید.'
                });

                // پاک کردن فرم
                setForm({
                    current_password: '',
                    new_password: '',
                    confirm_password: ''
                });

                // بعد از ۳ ثانیه رفتن به لاگین
                setTimeout(() => {
                    Cookies.remove('access_token');
                    router.push('/login');
                }, 3000);
            }
        } catch (err) {
            setMessage({
                type: 'error',
                text: err.response?.data?.message || 'خطا در تغییر رمز عبور'
            });
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="max-w-lg mx-auto pb-4">
            {/* هدر */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-gray-900">تغییر رمز عبور</h1>
                <p className="text-gray-600 mt-2">
                    برای امنیت بیشتر، رمز عبور قوی انتخاب کنید
                </p>
            </div>

            {/* کارت اصلی */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* رمز فعلی */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            رمز عبور فعلی
                        </label>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type={showPasswords.current ? 'text' : 'password'}
                                name="current_password"
                                value={form.current_password}
                                onChange={handleInputChange}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                placeholder="رمز عبور فعلی خود را وارد کنید"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => toggleShowPassword('current')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPasswords.current ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                    </div>

                    {/* رمز جدید */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            رمز عبور جدید
                        </label>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type={showPasswords.new ? 'text' : 'password'}
                                name="new_password"
                                value={form.new_password}
                                onChange={handleInputChange}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                placeholder="رمز عبور جدید"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => toggleShowPassword('new')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPasswords.new ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>

                        {/* نشانگر قدرت رمز */}
                        {form.new_password && (
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

                    {/* تکرار رمز جدید */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            تکرار رمز عبور جدید
                        </label>
                        <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type={showPasswords.confirm ? 'text' : 'password'}
                                name="confirm_password"
                                value={form.confirm_password}
                                onChange={handleInputChange}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                placeholder="تکرار رمز عبور جدید"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => toggleShowPassword('confirm')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPasswords.confirm ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>

                        {/* نمایش مطابقت رمزها */}
                        {form.new_password && form.confirm_password && (
                            <div className="mt-2 flex items-center gap-1 text-xs">
                                {form.new_password === form.confirm_password ? (
                                    <>
                                        <FiCheckCircle className="w-4 h-4 text-green-500" />
                                        <span className="text-green-600">رمزها مطابقت دارند</span>
                                    </>
                                ) : (
                                    <>
                                        <FiXCircle className="w-4 h-4 text-red-500" />
                                        <span className="text-red-600">رمزها مطابقت ندارند</span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* پیام موفقیت/خطا */}
                    {message.text && (
                        <div className={`p-4 rounded-xl ${message.type === 'success'
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                            }`}>
                            {message.text}
                        </div>
                    )}

                    {/* نکات امنیتی */}
                    <div className="bg-blue-50 p-4 rounded-xl">
                        <p className="text-sm font-bold text-blue-800 mb-2">نکات امنیتی:</p>
                        <ul className="text-xs text-blue-700 space-y-1 list-disc list-inside">
                            <li>حداقل ۸ کاراکتر</li>
                            <li>ترکیبی از حروف بزرگ و کوچک</li>
                            <li>حداقل یک عدد</li>
                            <li>حداقل یک کاراکتر خاص (!@#$%^&*)</li>
                        </ul>
                    </div>

                    {/* دکمه‌ها */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            disabled={loading || (form.new_password !== form.confirm_password)}
                            className="flex-1 bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200 disabled:opacity-50"
                        >
                            {loading ? 'در حال تغییر...' : 'تغییر رمز عبور'}
                        </button>

                    </div>
                </form>
            </div>
        </div>

    );
}
