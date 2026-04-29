import ProductGrid from "@/components/ProductGrid";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";
import FilterSidebarSkeleton from "@/components/FilterSidebarSkeleton";
const MobileFilterDrawer = dynamic(
    () => import("@/components/MobileFilterDrawer"),
    {
        loading: () => (
            <button className="lg:hidden p-2.5 bg-blue-50 text-blue-600 rounded-xl animate-pulse w-20 h-10" />
        ),
    }
);

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

// تابع آپدیت شده برای دریافت پارامترهای فیلتر
async function getShopData(page, search = "", category = "", minPrice = "", maxPrice = "", minRating = "", ordering = "") {
    const query = new URLSearchParams({
        page: page,
        ...(search && { search }),
        ...(category && { category }),
        ...(minPrice && { minPrice }),
        ...(maxPrice && { maxPrice }),
        ...(minRating && { minRating }),
        ...(ordering && { ordering }),
    }).toString();

    const res = await fetch(`${apiUrl}/api/products/?${query}`, {
        next: {
            revalidate: 60
        }
    });

    if (!res.ok) return { results: [], count: 0 };

    return res.json();
}

export async function generateMetadata({ searchParams }) {
    const sp = await searchParams;
    const search = sp.search || "";

    return {
        title: search ? `نتایج جستجو: ${search} | نکست شاپ` : "فروشگاه | نکست شاپ",
        description: search
            ? `مشاهده محصولات مرتبط با "${search}" در فروشگاه نکست شاپ`
            : "بهترین محصولات با بهترین قیمت‌ها در فروشگاه نکست شاپ",
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function ShopPage({ searchParams }) {
    const sp = await searchParams;

    const page = parseInt(sp.page) || 1;
    const search = sp.search || "";
    const category = sp.category || "";
    const minPrice = sp.minPrice || "";
    const maxPrice = sp.maxPrice || "";
    const minRating = sp.minRating || "";
    const ordering = sp.ordering || "";

    const data = await getShopData(page, search, category, minPrice, maxPrice, minRating, ordering);
    return (
        <div className="flex gap-10 p-2 container mx-auto">
            {/* سایدبار فیلتر - فقط در دسکتاپ نمایش داده شود */}
            <div className="hidden lg:block w-72 flex-shrink-0 relative">
                <Suspense fallback={<FilterSidebarSkeleton />}>
                    <FilterSidebar />
                </Suspense>
            </div>

            {/* محتوای اصلی */}
            <div className="flex-1">
                {/* هدر با دکمه منو برای موبایل */}
                <div className="flex justify-between items-center mb-6 md:mb-8 gap-4 lg:gap-0">
                    <div className=" w-auto flex flex-1 justify-between items-center gap-3">
                        <div>
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">فروشگاه</h1>
                            <p className="text-xs md:text-sm text-gray-500">
                                نمایش <span className="font-bold">{data.pagination.totalcount >= data.pagination.limit ? data.pagination.limit : data.pagination.totalcount % data.pagination.limit}</span> از
                                <span className="font-bold mr-1"> {data.pagination.totalcount.toLocaleString('fa-IR')}</span> کالا
                            </p>
                        </div>

                        {/* دکمه همبرگری برای موبایل - فقط در صفحه‌های کوچک نمایش داده شود */}
                        <div className="flex-1 flex justify-end">
                            <SearchBar />
                        </div>
                    </div>

                    <div className=" w-auto flex justify-end">
                        <MobileFilterDrawer>
                            <button className="lg:hidden p-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl transition-all duration-300 active:scale-95">
                                {/* <FiMenu className="w-5 h-5" /> */}
                                فیلتر ها
                            </button>
                        </MobileFilterDrawer>
                    </div>

                </div>


                {/* گرید محصولات */}
                <Suspense fallback={<ProductGridSkeleton />} >
                    <ProductGrid products={data.products} />
                </Suspense>

                {/* پجینیشن */}
                <div className="mt-8 md:mt-12">
                    <Pagination
                        currentPage={page}
                        totalCount={data.pagination.totalcount}
                        pageSize={12}
                    />
                </div>
            </div>
        </div>
    );
}
