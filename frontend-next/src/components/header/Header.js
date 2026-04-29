
import Link from 'next/link';
import HeaderCart from './HeaderCart';
import HeaderUser from './HeaderUser';
import MobileMenuButton from './MobileMenuButton';
import { HiOutlineHome } from 'react-icons/hi';
import NavbarLinks from './NavbarLinks';

export default function Header() {

    return (
        <header className=" bg-white/80 backdrop-blur-md sticky top-0 left-0 right-0 z-50 border-b border-gray-100">

            <div className="mx-auto px-4 sm:p-6 flex justify-between h-16 items-center">
                {/* لوگو */}
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="text-2xl font-black text-emerald-600 tracking-tighter">
                        NEXT<span className="text-gray-900">SHOP</span>
                    </Link>
                </div>

                {/* منوی دسکتاپ */}
                <NavbarLinks />

                {/* بخش آیکون‌ها و کاربر */}
                <div className="flex items-center gap-3">
                    {/* دکمه سبد خرید */}
                    <HeaderCart />

                    {/* بخش ورود / خروج */}
                    <HeaderUser />

                    {/* دکمه منوی موبایل */}
                    <div className="lg:hidden">
                        <MobileMenuButton />
                    </div>
                </div>

            </div>
        </header>
    );
}
