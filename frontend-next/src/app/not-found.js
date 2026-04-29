import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-600 to-blue-500 flex items-center justify-center px-4 select-none">
            <div className="text-center space-y-6 max-w-3xl">
                {/* عدد 404 با افکت ملایم */}
                <h1 className="text-9xl md:text-[14rem] lg:text-[18rem] font-black text-white/5 tracking-tighter leading-none animate-pulse">
                    404
                </h1>

                {/* متن اصلی */}
                <div className="relative">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white">
                        صفحه پیدا نشد!
                    </h2>
                </div>

                {/* آیکون/انیمیشن ساده */}
                <div className="pt-8">
                    <div className="w-28 h-28 mx-auto rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center animate-bounce">
                        <span className="text-7xl">👀</span>
                    </div>
                </div>

                {/* دکمه‌ها */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-10 py-5 bg-white text-indigo-950 font-bold text-xl rounded-2xl hover:bg-indigo-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 active:scale-95"
                    >
                        برگرد به خانه
                    </Link>

                    <Link
                        href="/shop"
                        className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/40 text-white font-bold text-xl rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-white/70"
                    >
                        برو به فروشگاه
                    </Link>
                </div>
            </div>
        </div>
    )
}
