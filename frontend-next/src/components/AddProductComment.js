'use client'

import { useState } from "react"
import { FaCheck, FaSearch } from "react-icons/fa";
import { FaCommentMedical, FaRegCommentDots } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { toast } from "sonner";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;


const AddProductComment = ({ productId, onCommentSubmitted }) => {
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // تابع کمکی برای دریافت Cookie
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        // اعتبارسنجی
        if (rating === 0) {
            toast.error("لطفاً امتیاز خود را وارد کنید")
            setError('لطفاً امتیاز خود را انتخاب کنید')
            return
        }

        if (!comment.trim()) {
            toast.error("لطفاً نظر خود را بنویسید")
            setError('لطفاً نظر خود را بنویسید')
            return
        }

        if (comment.length < 5) {
            toast.error("نظر شما باید حداقل ۵ کاراکتر باشد")
            setError('نظر شما باید حداقل ۵ کاراکتر باشد')
            return
        }

        if (comment.length > 1000) {
            toast.error("نظر شما نمی‌تواند بیشتر از ۱۰۰۰ کاراکتر باشد")
            setError('نظر شما نمی‌تواند بیشتر از ۱۰۰۰ کاراکتر باشد')
            return
        }

        setLoading(true)

        try {
            // دریافت توکن از Cookie
            const token = getCookie('access_token')

            if (!token) {
                setError('لطفاً ابتدا وارد حساب کاربری خود شوید')
                setLoading(false)
                return
            }

            const response = await fetch(`${apiUrl}/api/products/addcomment/${productId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    rating: rating,
                    comment: comment.trim()
                }),
                credentials: 'include' // مهم: برای ارسال Cookie
            })

            const data = await response.json()

            if (data.success) {
                toast.success("نظر شما با موفقیت ثبت شد")
                setSuccess('نظر شما با موفقیت ثبت شد')
                setComment('')
                setRating(0)
                setHoverRating(0)
                // اگر تابع callback داده شده، صدا بزن
                if (onCommentSubmitted) {
                    onCommentSubmitted(data.comment)
                }
                // پاک کردن پیام موفقیت بعد از ۳ ثانیه
                setTimeout(() => setSuccess(''), 4000)
            } else {
                // اگر خطای 401 (Unauthorized) بود

                if (response.status === 401) {
                    toast.error("نشست شما منقضی شده است. لطفاً مجدداً وارد شوید")
                    setError('نشست شما منقضی شده است. لطفاً مجدداً وارد شوید')
                } else {
                    toast.error(data.message || 'خطا در ثبت نظر')
                    setError(data.message || 'خطا در ثبت نظر')
                }
            }
        } catch (err) {
            toast.error("خطا در ارتباط با سرور")
            console.error('Error submitting comment:', err)
            setError('خطا در ارتباط با سرور')
        } finally {
            setLoading(false)
        }
    }

    // متن راهنما برای امتیازها
    const getRatingText = (rate) => {
        switch (rate) {
            case 1: return 'خیلی بد'
            case 2: return 'بد'
            case 3: return 'متوسط'
            case 4: return 'خوب'
            case 5: return 'عالی'
            default: return ''
        }
    }

    // رندر ستاره با ایموجی
    const renderStar = (starValue) => {
        const isActive = starValue <= (hoverRating || rating)
        return (
            <button
                type="button"
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHoverRating(starValue)}
                onMouseLeave={() => setHoverRating(0)}
                className="focus:outline-none transition-all hover:scale-125 text-3xl"
                aria-label={`امتیاز ${starValue}`}
            >
                {isActive ? '⭐' : '☆'}
            </button>
        )
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2 ">
                <TfiWrite className="text-3xl" /> ثبت نظر برای این محصول
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* بخش امتیازدهی با ستاره */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        ⭐ امتیاز شما *
                    </label>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star}>
                                {renderStar(star)}
                            </div>
                        ))}
                        <span className="mr-3 text-sm text-gray-600">
                            {getRatingText(hoverRating || rating)}
                        </span>
                    </div>
                </div>

                {/* بخش نوشتن نظر */}
                <div>
                    <label className="block font-medium text-gray-700 mb-2">
                        <FaRegCommentDots /> نظر شما *
                    </label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows="5"
                        placeholder="تجربه خود را از این محصول بنویسید..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        disabled={loading}
                        dir="rtl"
                    />
                    <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">
                            حداقل ۵ کاراکتر
                        </span>
                        <span className={`text-xs ${comment.length > 1000 ? 'text-red-500' : 'text-gray-500'}`}>
                            {comment.length}/1000
                        </span>
                    </div>
                </div>

                {/* نمایش خطاها */}
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-red-600 flex items-center gap-2">
                            <span><IoClose size={24} /></span>
                            <span>{error}</span>
                        </p>
                    </div>
                )}

                {/* نمایش پیام موفقیت */}
                {success && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm text-green-600 flex items-center gap-2">
                            <span><FaCheck size={24} /></span>
                            <span>{success}</span>
                        </p>
                    </div>
                )}

                {/* دکمه ارسال */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <span className="inline-block animate-spin">⏳</span>
                            <span>در حال ثبت نظر...</span>
                        </>
                    ) : (
                        <>
                            <span><FaCommentMedical /></span>
                            <span>ثبت نظر</span>
                        </>
                    )}
                </button>

                {/* نکات اخلاقی */}
                <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-100">
                    <p className="flex gap-1 justify-center items-center">نظرات شما پس از بررسی توسط تیم ما منتشر خواهد شد<FaSearch className="text-blue-500" /></p>
                    <p className="mt-1 flex gap-1 justify-center items-center">از درج نظرات توهین‌آمیز و غیرمرتبط خودداری فرمایید<MdOutlineDoNotDisturb className="text-red-500" /></p>
                </div>
            </form>
        </div>
    )
}

export default AddProductComment
