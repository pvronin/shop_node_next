import GetCategories from "@/utils/GetCategories";
import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";

const NavItem = async ({ href, icon: Icon, label, group }) => {
   const categories =
    group === "categories"
        ? await GetCategories()
        : [];

    return (
        <div className="relative group">
            <Link
                href={href}
                className="hover:text-emerald-600 transition flex items-center gap-1.5 px-2 py-1.5"
            >
                <Icon className="text-blue-600 text-lg transition-colors duration-200 group-hover:text-emerald-600" />
                <span className="font-medium">{label}</span>
            </Link>


        </div>
    );
};

export default NavItem;
