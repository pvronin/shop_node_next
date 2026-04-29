import Image from "next/image";
import Link from "next/link";
import discount_banner1 from "@/assets/img/discount_banner1.png";

export default function DiscounterBanner() {
    return (
            <Link href="/shop/discounted">
                <Image
                    className="w-full transition-opacity"
                    src={discount_banner1}
                    alt="تخفیف ویژه نکست شاپ"
                    priority
                    sizes="100vw"
                />
            </Link>
    );
}
