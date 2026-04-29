// app/dashboard/change-password/page.js
"use client";
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { FiLock, FiEye, FiEyeOff, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import GetPasswordStrength from '@/utils/GetPasswordStrength';

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;


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

    const validateForm = () => {
        const errors = {};

        if (!form.current_password) {
            errors.current_password = 'رمز عبور فعلی الزامی است';
        }

        if (!form.new_password) {
            errors.new_password = 'رمز عبور جدید الزامی است';
        } else if (form.new_password.length < 8) {
            errors.new_password = 'رمز عبور جدید باید حداقل ۸ کاراکتر باشد';
        } else if (!/[a-z]/.test(form.new_password)) {
            errors.new_password = 'رمز عبور باید شامل حروف کوچک باشد';
        } else if (!/[A-Z]/.test(form.new_password)) {
            errors.new_password = 'رمز عبور باید شامل حروف بزرگ باشد';
        } else if (!/[0-9]/.test(form.new_password)) {
            errors.new_password = 'رمز عبور باید شامل عدد باشد';
        }

        if (!form.confirm_password) {
            errors.confirm_password = 'تکرار رمز عبور الزامی است';
        } else if (form.new_password !== form.confirm_password) {
            errors.confirm_password = 'رمز عبور و تکرار آن مطابقت ندارند';
        }

        return errors;
    };

    const errors = validateForm();
    const isValid = Object.keys(errors).length === 0;

    // اعتبارسنجی قدرت رمز
    const passwordStrength = GetPasswordStrength(form.new_password);

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

        if (!isValid) {
            return;
        }

        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const token = Cookies.get('access_token');
            if (!token) {
                router.push('/login');
                return;
            }

            const response = await axios.post(
                `${apiUrl}/api/users/me/change-password`,
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

                // بعد از 2 ثانیه رفتن به لاگین
                setTimeout(() => {
                    Cookies.remove('access_token');
                    router.push('/login');
                }, 2000);
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

        <div className="max-w-lg mx-auto my-12">
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
                            {errors.current_password && (
                                <p className="text-red-500 text-xs mt-1">{errors.current_password}</p>
                            )}
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
                            {errors.new_password && (
                                <p className="text-red-500 text-xs mt-1">{errors.new_password}</p>
                            )}
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

                        {errors.confirm_password && (
                            <p className="text-red-500 text-xs mt-1">{errors.confirm_password}</p>
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
