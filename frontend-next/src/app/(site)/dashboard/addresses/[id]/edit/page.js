"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from "axios";
import { FiMapPin, FiTag, FiMap, FiNavigation, FiMail, FiSave, FiArrowRight, FiTrash2 } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { toast } from "sonner";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

export default function EditAddress() {
    const router = useRouter();
    const params = useParams();
    const addressId = params.id;

    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [form, setForm] = useState({
        label: '',
        province: '',
        city: '',
        postal_code: '',
        address_line: '',
        is_default: false
    });

    const [errors, setErrors] = useState({});
    const [deleteConfirm, setDeleteConfirm] = useState(false);

    // دریافت اطلاعات آدرس
    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const token = Cookies.get('access_token');
                const response = await axios.get(
                    `${apiUrl}/api/addresses/${addressId}`,
                    {
                        headers: { 'Authorization': `Bearer ${token}` }
                    }
                );

                if (response.data.success) {
                    setForm(response.data.address);
                } else {
                    alert('آدرس یافت نشد');
                    router.push('/dashboard');
                }
            } catch (error) {
                console.error('Error fetching address:', error);
                alert('خطا در دریافت اطلاعات آدرس');
                router.push('/dashboard');
            } finally {
                setIsFetching(false);
            }
        };

        if (addressId) {
            fetchAddress();
        }
    }, [addressId, router]);

    const handleChangeForm = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // پاک کردن خطای فیلد
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!form.label?.trim()) newErrors.label = 'برچسب آدرس الزامی است';
        if (!form.province?.trim()) newErrors.province = 'استان الزامی است';
        if (!form.city?.trim()) newErrors.city = 'شهر الزامی است';
        if (!form.postal_code?.trim()) newErrors.postal_code = 'کد پستی الزامی است';
        if (!form.address_line?.trim()) newErrors.address_line = 'آدرس کامل الزامی است';

        if (form.postal_code && !/^\d{10}$/.test(form.postal_code)) {
            newErrors.postal_code = 'کد پستی باید 10 رقم باشد';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            const token = Cookies.get('access_token');
            const response = await axios.put(
                `${apiUrl}/api/addresses/${addressId}`,
                form,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.success) {
                toast.success("آدرس با موفقیت بروزرسانی شد");
                router.push('/dashboard');
            } else {
                alert(response.data.message || 'خطا در ویرایش آدرس');
            }
        } catch (error) {
            console.error('Error updating address:', error);
            toast.error(
                <div>
                    <p>خطا در بروزرسانی آدرس</p>
                    <small>{error.response?.data?.message}</small>
                </div>
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteConfirm) {
            setDeleteConfirm(true);
            setTimeout(() => setDeleteConfirm(false), 3000);
            return;
        }

        if (!confirm('آیا از حذف این آدرس اطمینان دارید؟')) return;

        try {
            const token = Cookies.get('access_token');
            await axios.delete(
                `${apiUrl}/api/users/me/addresses/${addressId}`,
                {
                    headers: { 'Authorization': `Bearer ${token}` }
                }
            );

            toast.success("آدرس با موفقیت حذف شد");
            router.push('/dashboard');
        } catch (error) {
            console.error('Error deleting address:', error);
            toast.error(
                <div>
                    <p>خطا در حذف آدرس</p>
                    <small>{error.response?.data?.message}</small>
                </div>
            );
        }
    };

    if (isFetching) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">در حال بارگذاری اطلاعات...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* هدر صفحه */}
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-4">
                        <FiMapPin className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        ویرایش آدرس
                    </h1>
                    <p className="text-gray-500">
                        اطلاعات آدرس خود را به روز رسانی کنید
                    </p>
                </div>

                {/* فرم ویرایش */}
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* بخش اطلاعات پایه */}
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <FiTag className="w-5 h-5 text-blue-500" />
                            اطلاعات پایه
                        </h2>

                        <div className="space-y-4">
                            {/* برچسب آدرس */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    برچسب آدرس
                                    <span className="text-red-500 mr-1">*</span>
                                </label>
                                <div className="relative">
                                    <FiTag className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        name="label"
                                        value={form.label || ''}
                                        onChange={handleChangeForm}
                                        type="text"
                                        placeholder="مثال: خانه، محل کار، منزل والدین"
                                        className={`w-full pr-10 px-4 py-3 border ${errors.label ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                                    />
                                </div>
                                {errors.label && (
                                    <p className="text-red-500 text-xs mt-1">{errors.label}</p>
                                )}
                            </div>

                            {/* استان و شهر */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        استان
                                        <span className="text-red-500 mr-1">*</span>
                                    </label>
                                    <div className="relative">
                                        <FiMap className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            name="province"
                                            value={form.province || ''}
                                            onChange={handleChangeForm}
                                            type="text"
                                            placeholder="مثال: تهران"
                                            className={`w-full pr-10 px-4 py-3 border ${errors.province ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                                        />
                                    </div>
                                    {errors.province && (
                                        <p className="text-red-500 text-xs mt-1">{errors.province}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        شهر
                                        <span className="text-red-500 mr-1">*</span>
                                    </label>
                                    <div className="relative">
                                        <FiNavigation className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            name="city"
                                            value={form.city || ''}
                                            onChange={handleChangeForm}
                                            type="text"
                                            placeholder="مثال: تهران"
                                            className={`w-full pr-10 px-4 py-3 border ${errors.city ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                                        />
                                    </div>
                                    {errors.city && (
                                        <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                                    )}
                                </div>
                            </div>

                            {/* کد پستی */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    کد پستی
                                    <span className="text-red-500 mr-1">*</span>
                                </label>
                                <div className="relative">
                                    <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        name="postal_code"
                                        value={form.postal_code || ''}
                                        onChange={handleChangeForm}
                                        type="text"
                                        placeholder="۱۰ رقم"
                                        maxLength="10"
                                        className={`w-full pr-10 px-4 py-3 border ${errors.postal_code ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                                    />
                                </div>
                                {errors.postal_code && (
                                    <p className="text-red-500 text-xs mt-1">{errors.postal_code}</p>
                                )}
                            </div>

                            {/* آدرس کامل */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    آدرس کامل
                                    <span className="text-red-500 mr-1">*</span>
                                </label>
                                <div className="relative">
                                    <RiMapPinLine className="absolute right-3 top-3 text-gray-400" />
                                    <textarea
                                        name="address_line"
                                        value={form.address_line || ''}
                                        onChange={handleChangeForm}
                                        rows="3"
                                        placeholder="خیابان، کوچه، پلاک، واحد..."
                                        className={`w-full pr-10 px-4 py-3 border ${errors.address_line ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none`}
                                    />
                                </div>
                                {errors.address_line && (
                                    <p className="text-red-500 text-xs mt-1">{errors.address_line}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* بخش تنظیمات */}
                    <div className="p-6 border-b border-gray-100 bg-gray-50">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            تنظیمات
                        </h2>

                        <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200">
                            <div>
                                <p className="font-medium text-gray-800">آدرس پیش‌فرض</p>
                                <p className="text-sm text-gray-500">این آدرس به عنوان آدرس اصلی شما ثبت شود</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    name="is_default"
                                    type="checkbox"
                                    checked={form.is_default || false}
                                    onChange={handleChangeForm}
                                    className="sr-only peer"
                                />
                                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors duration-200">
                                    <div className={`absolute top-[2px] w-5 h-5 bg-white rounded-full shadow-md transition-all duration-200 ${form.is_default ? 'left-[22px]' : 'left-[2px]'}`} />
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* دکمه‌های اکشن */}
                    <div className="p-6 flex gap-3">
                        <button
                            type="button"
                            onClick={handleDelete}
                            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            <FiTrash2 className="w-5 h-5" />
                            {deleteConfirm ? 'تایید حذف' : 'حذف آدرس'}
                        </button>

                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                        >
                            انصراف
                        </button>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    در حال ذخیره...
                                </>
                            ) : (
                                <>
                                    <FiSave className="w-5 h-5" />
                                    ذخیره تغییرات

                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
