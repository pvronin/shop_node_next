import GetCategories from "@/utils/GetCategories";
import Link from "next/link";

const NavItem = async ({ href, icon: Icon, label, group }) => {


    const categories = await GetCategories()

    return (
        <div className="relative group">
            <Link
                href={href}
                className="hover:text-emerald-600 transition flex items-center gap-1.5 px-2 py-1.5"
            >
                <Icon className="text-blue-600 text-lg transition-colors duration-200 group-hover:text-emerald-600" />
                <span className="font-medium">{label}</span>
            </Link>

            {group === "categories" && (

                <div
                    className="absolute opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100
    left-0 top-full p-2 w-64 shadow-xl rounded-xl
    bg-white/95 backdrop-blur-md
    transition-all duration-300 ease-out
    border border-gray-100
    z-50 origin-top
    invisible group-hover:visible"
                >
                    {/* اسکرول سفارشی - مخفی در مرورگرهای مختلف */}
                    <div className="max-h-80 overflow-y-auto scrollbar-hide">
                        <ul className="space-y-1">
                            {categories.map((cat) => (
                                <li key={cat.id}>
                                    <Link
                                        href={`/shop/category/${cat.slug}`}
                                        className="flex items-center justify-between rounded-lg px-3 py-2.5
                                 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-transparent
                                 hover:text-emerald-600 transition-all duration-200
                                 text-gray-700 text-sm font-medium group/link"
                                    >
                                        <span>{cat.name}</span>
                                        <svg
                                            className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    {categories.indexOf(cat) !== categories.length - 1 && (
                                        <div className="mx-3 my-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default NavItem;
