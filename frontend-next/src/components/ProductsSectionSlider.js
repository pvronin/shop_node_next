import Slider from "@/components/Slider";
import Link from "next/link";

export default function ProductsSectionSlider({title, products}) {
    return (
        <section className="container mx-auto py-16 px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <Link href="/shop" className="text-blue-600 hover:underline">مشاهده همه ←</Link>
            </div>

            <Slider items={products} />
        </section>
    )
}
