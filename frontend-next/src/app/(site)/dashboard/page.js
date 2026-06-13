// app/dashboard/page.js
"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
    FiMail,
    FiUser,
    FiCalendar,
    FiShield,
    FiPhone,
    FiCheckCircle,
    FiXCircle,
    FiSend,
    FiEdit2,
    FiSave,
    FiX,
    FiMapPin,
    FiTrash2,
    FiPlus
} from 'react-icons/fi';
import Link from 'next/link';
import { toast } from 'sonner';

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;


export default function DashboardPage() {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [sendingVerification, setSendingVerification] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = Cookies.get('access_token');

                if (!token) {
                    window.location.href = '/login';
                    return;
                }

                const response = await axios.get(
                    'http://127.0.0.1:8000/api/users/me',
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );

                console.log('Response:', response.data);

                // مرتب‌سازی آدرس‌ها (پیش‌فرض اول)
                const sortedAddresses = response.data.addresses?.sort((a, b) => {
                    if (a.is_default && !b.is_default) return -1;
                    if (!a.is_default && b.is_default) return 1;
                    return 0;
                }) || [];

                const userData = {
                    ...response.data.user,
                    addresses: sortedAddresses
                };

                setUser(userData);

                // پر کردن فرم با اطلاعات کاربر
                setForm({
                    first_name: userData.first_name || '',
                    last_name: userData.last_name || '',
                    username: userData.username || '',
                    email: userData.email || '',
                    phone: userData.phone || '',
                });

            } catch (err) {
                console.error('Error:', err);
                setError('خطا در دریافت اطلاعات');

                if (err.response?.status === 401) {
                    Cookies.remove('access_token');
                    window.location.href = '/login';
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProfileUpdate = async () => {
        setUpdating(true);
        try {
            const token = Cookies.get('access_token');

            // فقط فیلدهایی که تغییر کردن رو بفرست
            const updatedFields = {};
            Object.keys(form).forEach(key => {
                if (form[key] !== user[key]) {
                    updatedFields[key] = form[key];
                }
            });

            // اگه هیچ تغییری نکرده
            if (Object.keys(updatedFields).length === 0) {
                setIsEditing(false);
                return;
            }

            const response = await axios.put(
                `${apiUrl}/api/users/me`,
                updatedFields,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(updatedFields);

            if (response.data.success) {
                // آپدیت اطلاعات کاربر
                toast.success("پروفایل بروز رسانی شد")
                const updatedUser = { ...user, ...updatedFields };
                setUser(updatedUser);
                setIsEditing(false);
            }
        } catch (err) {
            console.error('Error updating profile:', err ,err.response?.data?.message);
            toast.error("خطا در بروزرسانی پروفایل")
        } finally {
            setUpdating(false);
        }
    };

    const handleCancelEdit = () => {
        // برگردوندن فرم به مقادیر اصلی
        setForm({
            first_name: user?.first_name || '',
            last_name: user?.last_name || '',
            username: user?.username || '',
            email: user?.email || '',
            phone: user?.phone || ''
        });
        setIsEditing(false);
    };

    // const handleVerifyEmail = async () => {
    //     setSendingVerification(true);
    //     try {
    //         const token = Cookies.get('access_token');
    //         await axios.post(
    //             'http://127.0.0.1:8000/api/users/me/verify-email/send',
    //             {},
    //             {
    //                 headers: {
    //                     'Authorization': `Bearer ${token}`
    //                 }
    //             }
    //         );
    //         alert('ایمیل تایید مجدداً ارسال شد');
    //     } catch (err) {
    //         console.error('Error sending verification:', err);
    //         alert('خطا در ارسال ایمیل تایید');
    //     } finally {
    //         setSendingVerification(false);
    //     }
    // };

    const handleDeleteAddress = async (addressId) => {
        if (!confirm('آیا از حذف این آدرس اطمینان دارید؟')) return;

        try {
            const token = Cookies.get('access_token');
            await axios.delete(`${apiUrl}/api/addresses/${addressId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            // حذف آدرس از state
            setUser(prev => ({
                ...prev,
                addresses: prev.addresses.filter(addr => addr.id !== addressId)
            }));

            toast.success("آدرس با موفقیت حذف شد")
        } catch (err) {
            console.error('Error deleting address:', err);
            toast.error("خطا در حذف آدرس")
        }
    };

    const handleSetDefaultAddress = async (addressId) => {
        try {
            const token = Cookies.get('access_token');
            await axios.patch(`${apiUrl}/api/addresses/${addressId}/default`, {}, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            // آپدیت state
            setUser(prev => ({
                ...prev,
                addresses: prev.addresses.map(addr => ({
                    ...addr,
                    is_default: addr.id === addressId
                }))
            }));

            toast.success("آدرس پیشفرض تغییر کرد")
        } catch (err) {
            console.error('Error setting default address:', err);
            toast.error("خطا در تنظیم آدرس پیشفرض")
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="relative">
                        <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-600 rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <p className="mt-6 text-gray-600 font-medium">در حال بارگذاری پروفایل...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiXCircle className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">خطا در بارگذاری</h2>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-200"
                    >
                        تلاش مجدد
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto my-12 px-1 container">
            {/* هدر صفحه */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-gray-900">پروفایل کاربری</h1>
                    <p className="text-gray-600 mt-2">به داشبورد خود خوش آمدید</p>
                </div>
                {isEditing && (
                    <button
                        onClick={handleCancelEdit}
                        className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300 transition-all"
                    >
                        <FiX className="w-5 h-5" />
                        انصراف
                    </button>
                )}
            </div>

            {/* کارت اصلی پروفایل */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* بخش بالایی با گرادینت */}
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 px-8 py-10">
                    <div className="flex items-center gap-6">
                        {/* آواتار بزرگ */}
                        <div className="relative">
                            <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                                <span className="text-3xl font-bold text-white">
                                    {user?.first_name?.[0]}{user?.last_name?.[0] || 'U'}
                                </span>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                        </div>

                        {/* نام و نقش - در حالت ویرایش یا نمایش */}
                        <div className="flex-1 text-white flex flex-col justify-between gap-3">
                            {isEditing ? (
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={form.first_name}
                                        onChange={handleInputChange}
                                        placeholder="نام"
                                        className="bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                                    />
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={form.last_name}
                                        onChange={handleInputChange}
                                        placeholder="نام خانوادگی"
                                        className="bg-white/20 backdrop-blur border border-white/30 rounded-xl px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                                    />
                                </div>
                            ) : (
                                <h2 className="text-3xl font-bold">
                                    {user?.first_name} {user?.last_name}
                                </h2>
                            )}
                            <div className="flex items-center gap-3">
                                <span className="bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium">
                                    {user?.role === 'admin' ? 'مدیر سیستم' : 'کاربر عادی'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* بخش اطلاعات */}
                <div className="p-8">
                    {/* وضعیت ایمیل - بخش ویژه */}
                    <div className="mb-8">
                        <div className={`rounded-2xl p-6 ${user?.is_verified
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200'
                            : 'bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200'}`}>
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${user?.is_verified ? 'bg-green-200' : 'bg-amber-200'}`}>
                                        <FiMail className={`w-6 h-6 ${user?.is_verified ? 'text-green-700' : 'text-amber-700'}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">وضعیت ایمیل</h3>
                                        <p className="text-sm md:text-base text-gray-600">{user?.email}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            {user?.is_verified ? (
                                                <>
                                                    <FiCheckCircle className="w-5 h-5 text-green-600" />
                                                    <span className="text-green-700 font-medium">تایید شده</span>
                                                </>
                                            ) : (
                                                <>
                                                    <FiXCircle className="w-5 h-5 text-amber-600" />
                                                    <span className="text-amber-700 font-medium">تایید نشده</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {!user?.is_verified && (
                                    <button
                                        // onClick={handleVerifyEmail}
                                        disabled={sendingVerification}
                                        className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-xl font-medium hover:from-amber-600 hover:to-yellow-700 transition-all shadow-lg shadow-amber-200 disabled:opacity-50"
                                    >
                                        <FiSend className={`w-4 h-4 ${sendingVerification ? 'animate-pulse' : ''}`} />
                                        {sendingVerification ? 'در حال ارسال...' : 'ارسال ایمیل تایید'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* گرید اطلاعات - حالت نمایش یا ویرایش */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* نام کاربری */}
                        <InfoField
                            icon={<FiUser className="w-5 h-5" />}
                            label="نام کاربری"
                            name="username"
                            value={form.username}
                            userValue={user?.username}
                            isEditing={isEditing}
                            onChange={handleInputChange}
                            iconBgColor="bg-blue-50"
                            iconColor="text-blue-600"
                        />

                        {/* ایمیل */}
                        <InfoField
                            icon={<FiMail className="w-5 h-5" />}
                            label="ایمیل"
                            name="email"
                            value={form.email}
                            userValue={user?.email}
                            isEditing={isEditing}
                            onChange={handleInputChange}
                            iconBgColor="bg-purple-50"
                            iconColor="text-purple-600"
                            badge={!user?.is_verified ? {
                                text: 'تایید نشده',
                                color: 'amber'
                            } : null}
                        />

                        {/* شماره موبایل */}
                        <InfoField
                            icon={<FiPhone className="w-5 h-5" />}
                            label="شماره موبایل"
                            name="phone"
                            value={form.phone}
                            userValue={user?.phone}
                            isEditing={isEditing}
                            onChange={handleInputChange}
                            iconBgColor="bg-green-50"
                            iconColor="text-green-600"
                            placeholder="ثبت نشده"
                        />

                        {/* نقش کاربری (غیرقابل ویرایش) */}
                        <div className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:scale-110 transition-transform">
                                    <FiShield className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500 mb-1">نقش کاربری</p>
                                    <p className="font-bold text-gray-900">{user?.role === 'admin' ? 'مدیر' : 'کاربر عادی'}</p>
                                </div>
                            </div>
                        </div>

                        {/* تاریخ عضویت (غیرقابل ویرایش) */}
                        <div className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-orange-50 text-orange-600 group-hover:scale-110 transition-transform">
                                    <FiCalendar className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500 mb-1">تاریخ عضویت</p>
                                    <p className="font-bold text-gray-900">
                                        {user?.created_at ? new Date(user.created_at).toLocaleDateString('fa-IR') : '-'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ========== بخش آدرس‌ها ========== */}
                    {!isEditing && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                                    آدرس‌های من
                                </h3>
                                <div className="flex items-center gap-3">
                                    {/* <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {user?.addresses?.length || 0} آدرس
                                    </span> */}
                                    <Link
                                        href="/dashboard/newaddress"
                                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all"
                                    >
                                        <FiPlus className="w-4 h-4" />
                                        افزودن آدرس
                                    </Link>
                                </div>
                            </div>

                            {user?.addresses && user.addresses.length > 0 ? (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {user.addresses.map((address) => (
                                        <AddressCard
                                            key={address.id}
                                            address={address}
                                            onDelete={handleDeleteAddress}
                                            onSetDefault={handleSetDefaultAddress}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FiMapPin className="w-6 h-6 text-gray-500" />
                                    </div>
                                    <p className="text-gray-600 mb-2">آدرسی ثبت نشده است</p>
                                    <Link
                                        href="/dashboard/newaddress"
                                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                                    >
                                        + افزودن آدرس جدید
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}

                    {/* دکمه‌های عملیات */}
                    <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                        {isEditing ? (
                            <>
                                <button
                                    onClick={handleProfileUpdate}
                                    disabled={updating}
                                    className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3.5 rounded-xl font-bold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg shadow-emerald-200 disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    <FiSave className="w-5 h-5" />
                                    {updating ? 'در حال بروزرسانی...' : 'بروزرسانی پروفایل'}
                                </button>
                                <button
                                    onClick={handleCancelEdit}
                                    disabled={updating}
                                    className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-3.5 rounded-xl font-bold hover:from-gray-200 hover:to-gray-300 transition-all flex items-center justify-center gap-2"
                                >
                                    <FiX className="w-5 h-5" />
                                    انصراف
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                                >
                                    <FiEdit2 className="w-5 h-5" />
                                    ویرایش پروفایل
                                </button>
                                <Link
                                    className="flex-1 text-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-3.5 px-3 rounded-xl font-bold hover:from-gray-200 hover:to-gray-300 transition-all"
                                    href={'/change-password'}
                                >
                                    تغییر رمز عبور
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ========== کامپوننت فیلد اطلاعات ==========
function InfoField({ icon, label, name, value, userValue, isEditing, onChange, iconBgColor, iconColor, placeholder, badge }) {
    return (
        <div className="bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-all group">
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${iconBgColor} ${iconColor} group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">{label}</p>
                    {isEditing ? (
                        <input
                            type="text"
                            name={name}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder || userValue || 'وارد کنید...'}
                            className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-gray-900 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ) : (
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-gray-900">{userValue || placeholder || '—'}</p>
                            {badge && (
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${badge.color === 'amber' ? 'bg-amber-100 text-amber-700' : ''
                                    }`}>
                                    {badge.text}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ========== کامپوننت کارت آدرس ==========
function AddressCard({ address, onDelete, onSetDefault }) {

    return (
        <div className={`bg-white rounded-2xl p-5 border-2 border-blue-50 transition-all relative group`}>
            {/* نشان پیش‌فرض */}
            {address.is_default && (
                <div className="absolute -top-2 -right-2">
                    <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        پیش‌فرض
                    </div>
                </div>
            )}

            {/* هدر کارت */}
            <div className="flex items-center justify-between mb-3">

                {/* دکمه‌های عملیات */}
                <div className="flex gap-1">
                    <Link
                        href={`/dashboard/addresses/${address.id}/edit`}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <FiEdit2 className="w-4 h-4" />
                    </Link>
                    <button
                        onClick={() => onDelete(address.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-red-600 transition-colors"
                    >
                        <FiTrash2 className="w-4 h-4" />
                    </button>
                </div>

                {/* دکمه تنظیم به عنوان پیش‌فرض */}
                {!address.is_default && (
                    <button
                        onClick={() => onSetDefault(address.id)}
                        className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                        تنظیم به عنوان پیش‌فرض
                    </button>
                )}
            </div>

            {/* محتوای آدرس */}
            <div className="space-y-2 pr-14">
                <p className="text-gray-800 font-medium leading-relaxed">
                    {address.address_line}
                </p>
                <p className="text-sm text-gray-600">
                    {address.province}، {address.city}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>کد پستی:</span>
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                            {address.postal_code}
                        </span>
                    </div>


                </div>
            </div>
        </div>
    );
}
