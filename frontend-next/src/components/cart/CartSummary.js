export default function CartSummary({ totalItems, totalPrice, shippingCost, finalPrice }) {
    return (
        <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white h-fit sticky top-24 shadow-2xl shadow-emerald-900/20 lg:col-span-2">
            <h3 className="text-xl font-bold mb-8 border-b border-gray-800 pb-4">خلاصه صورت‌حساب</h3>

            <div className="space-y-6">
                <div className="flex justify-between text-gray-400">
                    <span>تعداد محصولات</span>
                    <span className="font-bold text-white">{totalItems}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                    <span>مجموع قیمت</span>
                    <span className="font-bold text-white">{totalPrice.toLocaleString()} تومان</span>
                </div>

                <div className="flex justify-between text-gray-400">
                    <span>هزینه ارسال</span>
                    <span className={`font-bold ${shippingCost === 0 ? 'text-emerald-400' : 'text-white'}`}>
                        {shippingCost === 0 ? 'رایگان' : `${shippingCost.toLocaleString()} تومان`}
                    </span>
                </div>

                <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
                    <span className="text-lg">مبلغ قابل پرداخت</span>
                    <span className="text-xl font-black text-emerald-400">{finalPrice.toLocaleString()} تومان</span>
                </div>
            </div>

            <button className="w-full bg-emerald-500 text-gray-900 py-5 rounded-2xl font-black text-lg mt-10 hover:bg-emerald-400 hover:-translate-y-1 transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                تأیید و پرداخت نهایی
            </button>
        </div>
    );
}
