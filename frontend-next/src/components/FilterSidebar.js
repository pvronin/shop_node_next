"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiFilter, FiX, FiStar, FiDollarSign, FiChevronDown } from "react-icons/fi";
import { RiFilter3Line } from "react-icons/ri";
import PriceRange from "./PriceRange";

export default function FilterSidebar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [categories, setCategories] = useState([]);
    const [expandedSections, setExpandedSections] = useState({
        ordering: true,
        categories: false,
        rating: false,
        price: true
    });
    const [tempPrice, setTempPrice] = useState([
        Number(searchParams.get("minPrice")) || 0,
        Number(searchParams.get("maxPrice")) || 50000
    ]);
    useEffect(() => {
        setTempPrice([
            Number(searchParams.get("minPrice")) || 0,
            Number(searchParams.get("maxPrice")) || 50000
        ]);
    }, [searchParams]); // وابسته به مقادیر URL

    // دریافت دسته‌بندی‌ها
    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/productcategories");
                const data = await res.json();
                setCategories(data);

            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        getCategories();
    }, []);


    const updateFilter = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) params.set(key, value);
        else params.delete(key);
        params.set("page", "1");
        router.push(`/shop?${params.toString()}`, { scroll: false });
    };

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const clearAllFilters = () => {
        router.push('/shop', { scroll: false });
    };

    // شمارش فیلترهای فعال
    const activeFiltersCount = Array.from(searchParams.entries()).filter(([key]) => !['page'].includes(key)).length;

    return (
        <aside className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm h-fit sticky top-17 overflow-y-auto">
            {/* هدر سایدبار */}
            <div className="p-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <RiFilter3Line className="w-5 h-5 text-blue-600" />
                        <h2 className="text-lg font-bold text-gray-900">فیلترها</h2>
                    </div>
                    {activeFiltersCount > 0 && (
                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">
                            {activeFiltersCount} فعال
                        </span>
                    )}
                </div>
            </div>

            {/* محتوای فیلترها */}
            <div className="p-5 space-y-5">
                {/* بخش ترتیب */}
                <div className="bg-gray-50 rounded-xl p-4">
                    <button
                        onClick={() => toggleSection('ordering')}
                        className="flex items-center justify-between w-full mb-3"
                    >
                        <div className="flex items-center gap-2">
                            <FiChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${expandedSections.ordering ? 'rotate-180' : ''}`} />
                            <h3 className="font-bold text-sm md:text-base text-gray-900">ترتیب نمایش</h3>
                        </div>
                        {searchParams.get("ordering") && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">فعال</span>
                        )}
                    </button>

                    {expandedSections.ordering && (
                        <select
                            onChange={(e) => updateFilter("ordering", e.target.value)}
                            value={searchParams.get("ordering") || ""}
                            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        >
                            <option value="">پیش‌فرض (جدیدترین)</option>
                            <option value="-rating">محبوب‌ترین ★</option>
                            <option value="-price">گران‌ترین ↑</option>
                            <option value="price">ارزان‌ترین ↓</option>
                        </select>
                    )}
                </div>

                {/* بخش دسته‌بندی‌ها */}
                <div className="bg-gray-50 rounded-xl p-4">
                    <button
                        onClick={() => toggleSection('categories')}
                        className="flex items-center justify-between w-full mb-3"
                    >
                        <div className="flex items-center gap-2">
                            <FiChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${expandedSections.categories ? 'rotate-180' : ''}`} />
                            <h3 className="font-bold text-sm md:text-base text-gray-900">دسته‌بندی‌ها</h3>
                        </div>
                        {searchParams.get("category") && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">فعال</span>
                        )}
                    </button>

                    {expandedSections.categories && (
                        <div className="space-y-2">
                            <button
                                onClick={() => updateFilter("category", "")}
                                className={`w-full text-right px-4 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between ${!searchParams.get("category")
                                    ? "bg-blue-50 text-blue-700 font-bold border border-blue-200"
                                    : "text-gray-600 hover:bg-gray-100"}`}
                            >
                                <span>همه دسته‌بندی‌ها</span>
                                <span className="text-gray-400 text-xs">({categories.length})</span>
                            </button>

                            <div className="max-h-60 overflow-y-auto pr-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        onClick={() => updateFilter("category", cat.id)}
                                        className={`w-full text-right px-4 py-2.5 rounded-lg text-sm transition-all my-1 flex items-center justify-between ${searchParams.get("category") === cat.slug
                                            ? "bg-blue-50 text-blue-700 font-bold border border-blue-200"
                                            : "text-gray-600 hover:bg-gray-100"}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                            {cat.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* بخش امتیاز */}
                <div className="bg-gray-50 rounded-xl p-4">
                    <button
                        onClick={() => toggleSection('rating')}
                        className="flex items-center justify-between w-full mb-3"
                    >
                        <div className="flex items-center gap-2">
                            <FiChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${expandedSections.rating ? 'rotate-180' : ''}`} />
                            <h3 className="font-bold text-sm md:text-base text-gray-900 flex items-center gap-2">
                                <FiStar className="w-4 h-4 text-amber-500" />
                                حداقل امتیاز
                            </h3>
                        </div>
                        {searchParams.get("minRating") && (
                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">فعال</span>
                        )}
                    </button>

                    {expandedSections.rating && (
                        <div className="space-y-3">
                            <select
                                onChange={(e) => updateFilter("minRating", e.target.value)}
                                value={searchParams.get("minRating") || ""}
                                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            >
                                <option value="">همه امتیازها</option>
                                <option value="4.5">★★★★☆ 4.5+</option>
                                <option value="4">★★★★☆ 4+</option>
                                <option value="3">★★★☆☆ 3+</option>
                            </select>
                        </div>
                    )}
                </div>

                {/* بخش قیمت */}
                <div className="bg-gray-50 rounded-xl p-4">
                    <button
                        onClick={() => toggleSection('price')}
                        className="flex items-center justify-between w-full mb-3"
                    >
                        <div className="flex items-center gap-2">
                            <FiChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} />
                            <h3 className="font-bold text-sm md:text-base text-gray-900 flex items-center gap-2">
                                <FiDollarSign className="w-4 h-4 text-emerald-600" />
                                محدوده قیمت
                            </h3>
                        </div>
                        {(searchParams.get("minPrice") || searchParams.get("maxPrice")) && (
                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">فعال</span>
                        )}
                    </button>

                    {expandedSections.price && (
                        <div className="space-y-4">
                            <PriceRange
                                min={0}
                                max={50000}
                                value={tempPrice}
                                onChange={(values) => setTempPrice(values)}
                            />
                        </div>
                    )}
                </div>

                {/* دکمه‌های اکشن */}
                <div className="flex gap-2 lg:gap-3">
                    <button
                        onClick={clearAllFilters}
                        className="flex-1 text-[10px] bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium py-3 px-1 rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                        <FiX className="w-4 h-4" />
                        پاک کردن همه
                    </button>

                    <button
                        onClick={() => {
                            const params = new URLSearchParams(searchParams.toString());
                            params.set("minPrice", tempPrice[0]);
                            params.set("maxPrice", tempPrice[1]);
                            params.set("page", "1");
                            router.push(`/shop?${params.toString()}`, { scroll: false });
                        }}
                        className="flex-1 text-[10px] bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-3 px-1 rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                        <FiFilter className="w-4 h-4" />
                        اعمال فیلترها
                    </button>
                </div>
            </div>


            <div className="p-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <p className="text-xs text-gray-500 text-center">
                    {activeFiltersCount > 0
                        ? `${activeFiltersCount} فیلتر فعال دارید`
                        : 'هنوز فیلتری انتخاب نکرده‌اید'}
                </p>
            </div>
        </aside>
    );
}
