import Link from "next/link";
import {
    FiTruck,
    FiShield,
    FiHeadphones,
    FiRefreshCw,
    FiShoppingBag,
} from "react-icons/fi";
import { FaRegHandshake, FaRegLightbulb } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlinePayment } from "react-icons/md";

export const metadata = {
    title: "درباره ما | نکست شاپ",
    description: "آشنایی با نکست شاپ - بزرگترین فروشگاه آنلاین با بهترین قیمت‌ها و کیفیت تضمینی",
    keywords: "درباره ما, فروشگاه اینترنتی, نکست شاپ",
};

export default function AboutUPage() {
    return (
        <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-md"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-md"></div>

                <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center  bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-6">
                            <span className="text-sm">تاسیس ۱۴۰۲</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            داستان <span className="text-yellow-300">نکست شاپ</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                            ما اینجا هستیم تا تجربه خرید آنلاین را برای شما متحول کنیم.
                            با افتخار از سال ۱۴۰۲، همراه شما در مسیر خریدی آسان، امن و لذت‌بخش.
                        </p>
                    </div>
                </div>
            </section>

            {/* ماموریت و چشم‌انداز */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaRegLightbulb className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">چشم‌انداز</h3>
                            <p className="text-gray-600 leading-relaxed">
                                تبدیل شدن به بزرگ‌ترین و معتبرترین پلتفرم خرید آنلاین در ایران،
                                با ارائه بهترین تجربه کاربری و تنوع بی‌نظیر محصولات.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <FaRegHandshake className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">ماموریت</h3>
                            <p className="text-gray-600 leading-relaxed">
                                فراهم کردن دسترسی آسان و سریع به محصولات با کیفیت، با قیمت‌های رقابتی
                                و ارائه خدمات پس از فروش بی‌نقص به مشتریان عزیز.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* آمار و ارقام */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">نکست شاپ در یک نگاه</h2>
                        <p className="text-blue-100 text-lg">افتخار می‌کنیم که همراه شما هستیم</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">+۵۰٬۰۰۰</div>
                            <div className="text-sm md:text-base">محصول</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">+۱۰۰٬۰۰۰</div>
                            <div className="text-sm md:text-base">مشتری راضی</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">+۵۰۰</div>
                            <div className="text-sm md:text-base">برند معتبر</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">۲۴/۷</div>
                            <div className="text-sm md:text-base">پشتیبانی</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* مزایا */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            چرا <span className="text-blue-600">نکست شاپ</span>؟
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            ۷ دلیل برای اینکه خرید از نکست شاپ را انتخاب کنید
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <BenefitCard
                            icon={<FiTruck />}
                            title="ارسال سریع"
                            description="ارسال به سراسر کشور در کمترین زمان ممکن"
                        />
                        <BenefitCard
                            icon={<FiShield />}
                            title="ضمانت اصالت"
                            description="تضمین اصالت کالاها با گارانتی معتبر"
                        />
                        <BenefitCard
                            icon={<FiRefreshCw />}
                            title="بازگشت کالا"
                            description="۷ روز ضمانت بازگشت کالا"
                        />
                        <BenefitCard
                            icon={<MdOutlinePayment />}
                            title="پرداخت امن"
                            description="درگاه‌های پرداخت معتبر و امن"
                        />
                        <BenefitCard
                            icon={<FiHeadphones />}
                            title="پشتیبانی ۲۴/۷"
                            description="تیم پشتیبانی آماده پاسخگویی در هر ساعت"
                        />
                        <BenefitCard
                            icon={<MdOutlineSecurity />}
                            title="امنیت اطلاعات"
                            description="حفظ حریم شخصی و امنیت اطلاعات شما"
                        />
                    </div>
                </div>
            </section>

            {/* داستان ما */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                داستان <span className="text-blue-600">ما</span>
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                <span className="font-bold text-blue-600 text-xl">نکست شاپ</span> در سال ۱۴۰۲ با یک ایده ساده متولد شد:
                                ایجاد فروشگاهی اینترنتی که خرید را به تجربه‌ای لذت‌بخش و بی‌دغدغه تبدیل کند.
                            </p>
                            <p>
                                ما معتقدیم خرید آنلاین نباید پیچیده باشد. به همین دلیل از روز اول تمرکز خود را
                                بر سه اصل اساسی قرار دادیم: <strong className="text-gray-800">کیفیت، اعتماد و رضایت مشتری</strong>.
                            </p>
                            <p>
                                امروز با بیش از ۵۰٬۰۰۰ محصول متنوع در دسته‌بندی‌های مختلف، همراه بیش از ۱۰۰٬۰۰۰
                                مشتری راضی در سراسر کشور هستیم و هر روز برای بهبود خدمات و ارائه بهترین‌ها تلاش می‌کنیم.
                            </p>
                            <p>
                                تیم ما متشکل از جوانان متخصص و با انگیزه است که عاشق کار خود هستند و با تمام وجود
                                برای رضایت شما عزیزان تلاش می‌کنند.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ارزش‌های ما */}
            <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            ارزش‌های <span className="text-blue-600">ما</span>
                        </h2>
                        <p className="text-gray-600 text-lg">اصولی که در نکست شاپ به آن‌ها پایبندیم</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <ValueCard
                            number="۰۱"
                            title="مشتری مداری"
                            description="رضایت شما اولویت اول ماست و برای جلب رضایت شما از هیچ تلاشی فروگذار نمی‌کنیم"
                        />
                        <ValueCard
                            number="۰۲"
                            title="شفافیت"
                            description="اطلاعات دقیق و کامل محصولات را در اختیار شما قرار می‌دهیم"
                        />
                        <ValueCard
                            number="۰۳"
                            title="پیشگامی"
                            description="همیشه به دنبال راه‌های نوین برای بهبود خدمات و تجربه کاربری هستیم"
                        />
                        <ValueCard
                            number="۰۴"
                            title="یادگیری مستمر"
                            description="با مطالعه نیازها و سلیقه شما، خود را بهبود می‌بخشیم"
                        />
                        <ValueCard
                            number="۰۵"
                            title="مسئولیت اجتماعی"
                            description="به محیط زیست و جامعه احترام می‌گذاریم و در قبال آن مسئولیم"
                        />
                        <ValueCard
                            number="۰۶"
                            title="تیم‌گرایی"
                            description="با همکاری و همدلی به موفقیت‌های بزرگ دست می‌یابیم"
                        />
                    </div>
                </div>
            </section>

            {/* تیم ما */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            تیم <span className="text-blue-600">ما</span>
                        </h2>
                        <p className="text-gray-600 text-lg">افرادی که پشت نکست شاپ هستند</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <TeamCard
                            name="علی حسینی"
                            position="مدیرعامل و بنیان‌گذار"
                            quote="ایجاد تحول در تجربه خرید آنلاین، رویای من بود که با نکست شاپ به حقیقت پیوست"
                        />
                        <TeamCard
                            name="سارا مرادی"
                            position="مدیر بازاریابی"
                            quote="هدف ما ایجاد ارتباطی ماندگار با مشتریان از طریق ارزش‌آفرینی است"
                        />
                        <TeamCard
                            name="رضا کریمی"
                            position="مدیر فنی"
                            quote="تکنولوژی در خدمت شماست تا خریدی آسان و امن را تجربه کنید"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            آماده خرید از نکست شاپ هستید؟
                        </h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            به جمع هزاران مشتری راضی ما بپیوندید
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/shop"
                                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all hover:scale-105"
                            >
                                <FiShoppingBag className="w-5 h-5" />
                                شروع خرید
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all"
                            >
                                تماس با ما
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}



// کامپوننت‌های کمکی
function BenefitCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    );
}


function ValueCard({ number, title, description }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-blue-600/20 mb-2">{number}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    );
}


function TeamCard({ name, position, quote }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {name.charAt(0)}
            </div>
            <h3 className="text-lg font-bold text-gray-800">{name}</h3>
            <p className="text-blue-600 text-sm mb-3">{position}</p>
            <p className="text-gray-500 text-sm italic">"{quote}"</p>
        </div>
    );
}
