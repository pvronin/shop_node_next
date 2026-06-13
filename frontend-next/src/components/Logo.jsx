// components/Logo.jsx
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/logo/Logo.png"; // ✅ import مستقیم


export default function Logo({ width = 50, height = 50, className = "flex items-center" }) {
    return (
        <Link href="/" className={className}>
            <Image
                src={LogoImage}
                alt="لوگو سایت"
                width={width}
                height={height}
                priority
            />
        </Link>
    );
}
