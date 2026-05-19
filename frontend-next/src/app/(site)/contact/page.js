// app/contact/page.j
"use client";

import { useState } from "react";
import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock,
    FiSend,
    FiCheckCircle,
    FiAlertCircle,
    FiGlobe,
    FiInstagram,
    FiTwitter,
    FiLinkedin,
    FiMessageCircle
} from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";



export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // شبیه‌سازی ارسال به سرور
        setTimeout(() => {
            console.log("Form data:", formData);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSubmitting(false);

            // پاک کردن پیام موفقیت بعد از ۵ ثانیه
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);

        // در حالت واقعی، این کد رو استفاده کن:
        /*
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
        */
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-md"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-md"></div>

                <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-6">
                            <FiMessageCircle className="w-4 h-4" />
                            <span className="text-sm">پشتیبانی ۲۴ ساعته</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            تماس با <span className="text-yellow-300">ما</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                            ما همیشه گوش شنوایی برای نظرات، پیشنهادات و سوالات شما هستیم.
                            با ما در ارتباط باشید.
                        </p>
                    </div>
                </div>
            </section>

            {/* اطلاعات تماس */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <ContactCard
                            icon={<FiMapPin />}
                            title="آدرس"
                            content="تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۳"
                            linkText="مشاهده در نقشه"
                            linkHref="https://www.google.com/maps/@36.243414,59.5928787,16z?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                        />
                        <ContactCard
                            icon={<FiPhone />}
                            title="تلفن تماس"
                            content="989150647572"
                            subContent="۰۲۱-۸۷۶۵۴۳۲۱"
                            linkText="تماس مستقیم"
                            linkHref="tel:989150647572"
                        />
                        <ContactCard
                            icon={<FiMail />}
                            title="ایمیل"
                            content="emeil.seyyed.arm@gmail.com"
                            subContent="support@nextshop.com"
                            linkText="ارسال ایمیل"
                            linkHref="mailto:emeil.seyyed.arm@gmail.com"
                        />
                        <ContactCard
                            icon={<FiClock />}
                            title="ساعات کاری"
                            content="شنبه تا پنجشنبه: ۹ - ۲۰"
                            subContent="جمعه: ۱۰ - ۱۴"
                        />
                    </div>
                </div>
            </section>

            {/* فرم تماس و نقشه */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                فرم <span className="text-blue-600">تماس</span>
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                                سوال، پیشنهاد یا انتقادی دارید؟ فرم زیر را پر کنید تا در اسرع وقت با شما تماس بگیریم.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* فرم تماس */}
                            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            نام و نام خانوادگی
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            placeholder="علی حسینی"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            ایمیل
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            placeholder="info@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            موضوع
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        >
                                            <option value="">انتخاب کنید...</option>
                                            <option value="پشتیبانی">پشتیبانی و خدمات</option>
                                            <option value="فروش">مشاوره خرید</option>
                                            <option value="همکاری">درخواست همکاری</option>
                                            <option value="انتقاد">انتقاد و پیشنهاد</option>
                                            <option value="سایر">سایر موارد</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            پیام شما
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                            placeholder="پیام خود را بنویسید..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg hover:shadow-xl"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                در حال ارسال...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend className="w-5 h-5" />
                                                ارسال پیام
                                            </>
                                        )}
                                    </button>

                                    {submitStatus === "success" && (
                                        <div className="flex items-center gap-2 p-3 bg-green-50 text-green-600 rounded-xl">
                                            <FiCheckCircle className="w-5 h-5" />
                                            <span className="text-sm">پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم.</span>
                                        </div>
                                    )}

                                    {submitStatus === "error" && (
                                        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl">
                                            <FiAlertCircle className="w-5 h-5" />
                                            <span className="text-sm">خطا در ارسال پیام. لطفاً مجدداً تلاش کنید.</span>
                                        </div>
                                    )}
                                </form>
                            </div>

                            {/* نقشه و اطلاعات جانبی */}
                            <div className="space-y-6">
                                {/* نقشه */}
                                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg h-64 md:h-72">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6435.67724280694!2d59.59287872824708!3d36.24341399353861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1779197752662!5m2!1sfa!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="نقشه فروشگاه"
                                    ></iframe>
                                </div>

                                {/* شبکه‌های اجتماعی */}
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <FiGlobe className="w-5 h-5" />
                                        ما را دنبال کنید
                                    </h3>
                                    <p className="text-blue-100 mb-6">
                                        در شبکه‌های اجتماعی همراه ما باشید و از آخرین تخفیف‌ها و محصولات جدید مطلع شوید.
                                    </p>
                                    <div className="flex gap-4">
                                        <SocialLink href="https://instagram.com" icon={<FiInstagram />} label="اینستاگرام" />
                                        <SocialLink href="https://telegram.org" icon={<FaTelegramPlane />} label="تلگرام" />
                                        <SocialLink href="https://twitter.com" icon={<FiTwitter />} label="توییتر" />
                                        <SocialLink href="https://linkedin.com" icon={<FiLinkedin />} label="لینکدین" />
                                    </div>
                                </div>

                                {/* سوالات متداول کوتاه */}
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                                        سوالات متداول
                                    </h3>
                                    <div className="space-y-3">
                                        <FaqItem
                                            question="زمان ارسال سفارش چقدر است؟"
                                            answer="سفارش‌های تهران در کمتر از ۲۴ ساعت و شهرستان‌ها در ۲ تا ۵ روز کاری ارسال می‌شوند."
                                        />
                                        <FaqItem
                                            question="چگونه سفارش خود را پیگیری کنم؟"
                                            answer="از طریق پنل کاربری خود می‌توانید وضعیت سفارش را مشاهده کنید."
                                        />
                                        <FaqItem
                                            question="شرایط بازگشت کالا چیست؟"
                                            answer="در صورت عدم رضایت، تا ۷ روز فرصت دارید کالا را بازگردانید."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* بخش سوالات متداول کامل */}
            <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            سوالات <span className="text-blue-600">متداول</span>
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-4">پاسخ به سوالات رایج شما</p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        <FaqItemFull
                            question="چگونه می‌توانم سفارش خود را لغو کنم؟"
                            answer="تا قبل از ارسال سفارش، می‌توانید از طریق پنل کاربری یا تماس با پشتیبانی سفارش خود را لغو کنید. در صورت لغو سفارش، مبلغ پرداختی طی ۲۴ تا ۴۸ ساعت به حساب شما بازگردانده می‌شود."
                        />
                        <FaqItemFull
                            question="آیا امکان تعویض کالا وجود دارد؟"
                            answer="بله، در صورت وجود مشکل در کالا یا عدم تطابق با مشخصات، می‌توانید درخواست تعویض دهید. کالا باید در بسته‌بندی اصلی و بدون استفاده باشد."
                        />
                        <FaqItemFull
                            question="هزینه ارسال چگونه محاسبه می‌شود؟"
                            answer="هزینه ارسال بر اساس وزن بسته و مقصد محاسبه می‌شود. برای سفارش‌های بالای ۵۰۰ هزار تومان، ارسال رایگان است."
                        />
                        <FaqItemFull
                            question="آیا نکست شاپ گارانتی دارد؟"
                            answer="تمامی محصولات دارای گارانتی اصالت و سلامت فیزیکی هستند. برخی محصولات نیز دارای گارانتی خدمات از طرف شرکت‌های معتبر می‌باشند."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            نیاز به مشاوره دارید؟
                        </h2>
                        <p className="text-gray-600 mb-8">
                            تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="tel:989150647572"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all hover:scale-105"
                            >
                                <FiPhone className="w-5 h-5" />
                                تماس تلفنی
                            </Link>
                            <Link
                                href="https://wa.me/989150647572"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-all hover:scale-105"
                            >
                                <FiMessageCircle className="w-5 h-5" />
                                واتساپ
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}





// کامپوننت‌های کمکی
function ContactCard({ icon, title, content, subContent, linkText, linkHref }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all group text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{content}</p>
            {subContent && <p className="text-gray-600 text-sm mt-1">{subContent}</p>}
            {linkText && (
                <Link href={linkHref} className="inline-block mt-3 text-blue-600 text-sm font-medium hover:underline">
                    {linkText}
                </Link>
            )}
        </div>
    );
}


function SocialLink({ href, icon, label }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
            aria-label={label}
        >
            {icon}
        </Link>
    );
}


function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 pb-3">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-right"
            >
                <span className="text-gray-800 font-medium">{question}</span>
                <span className="text-blue-600 text-xl">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
                <p className="text-gray-500 text-sm mt-2 pr-4">{answer}</p>
            )}
        </div>
    );
}


function FaqItemFull({ question, answer }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{question}</h3>
            <p className="text-gray-600">{answer}</p>
        </div>
    );
}
