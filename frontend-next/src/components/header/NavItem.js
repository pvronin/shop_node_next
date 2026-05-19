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
                    className="absolute opacity-0 h-96 group-hover:opacity-100 scale-0 group-hover:scale-100
            left-0 top-full mt-1.5 p-3 w-full shadow-lg rounded-md
            bg-white/90 backdrop-blur-md
            transition-all duration-400 ease-in-out border border-blue-100 z-10 origin-top overflow-y-scroll"
                >
                    <ul className="space-y-1.5 text-sm">
                        {
                            categories.map((cat) => (
                                <li key={cat.id}>
                                    <Link
                                        href={`/shop/category/${cat.slug}`}
                                        className="block rounded-md px-2.5 py-1 hover:bg-emerald-50 hover:text-emerald-600 transition"
                                    >
                                        {cat.name}
                                    </Link>
                                    <hr className="text-gray-200" />
                                </li>

                            ))
                        }

                    </ul>
                </div>
            )
            }
        </div >
    );
};

export default NavItem;
