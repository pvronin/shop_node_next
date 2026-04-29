import { HiHome, HiCollection, HiShoppingBag, HiInformationCircle } from "react-icons/hi";
import NavItem from "./NavItem";

export default function NavbarLinks() {
  return (
    <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">

      <NavItem href="/" label="صفحه اصلی" icon={HiHome} />

      <NavItem href="/" label="دسته بندی محصولات" icon={HiCollection} group={"categories"} />

      <NavItem href="/shop" label="فروشگاه" icon={HiShoppingBag} />

      <NavItem href="/about" label="درباره ما" icon={HiInformationCircle} />

    </div>
  );
}
