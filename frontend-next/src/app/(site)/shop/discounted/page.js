// app/discounterpage/page.js (Server Component)
import Pagination from "@/components/Pagination";
import ProductGrid from "@/components/ProductGrid";
import discount_banner1 from "@/assets/img/discount_banner1.png";
import Image from "next/image";
import Link from "next/link";
import DiscounterBanner from "@/components/DiscounterBanner";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";
import { Suspense } from "react";

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;

export async function generateMetadata() {
    return {
        title: "محصولات تخفیف‌دار | نکست شاپ",
        description: "بهترین محصولات با تخفیف‌های ویژه و شگفت‌انگیز",
    };
}

async function getDiscountedProducts(page, search = "", category = "", minPrice = "", maxPrice = "", minRating = "", ordering = "") {
    try {
        const query = new URLSearchParams({
            page: page,
            // ...(search && { search }),
            // ...(category && { category }),
            // ...(minPrice && { minPrice }),
            // ...(maxPrice && { maxPrice }),
            // ...(minRating && { minRating }),
            // ...(ordering && { ordering }),
        }).toString();
        // توجه: در سرور کامپوننت مستقیما fetch می‌زنیم
        const response = await fetch(`${apiUrl}/api/products/discounted?${query}`, {
            next: {
                revalidate: 300
            }
        });

        if (!response.ok) {
            throw new Error('خطا در دریافت محصولات');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('❌ خطا:', error);
        return { products: [], pagination: {} };
    }
}

export default async function DiscounterPage({ searchParams }) {
    const sp = await searchParams;
    const page = parseInt(sp.page) || 1;
    const search = sp.search || "";
    const category = sp.category || "";
    const minPrice = sp.minPrice || "";
    const maxPrice = sp.maxPrice || "";
    const minRating = sp.minRating || "";
    const ordering = sp.ordering || "";

    const data = await getDiscountedProducts(page, search, category, minPrice, maxPrice, minRating, ordering);
    // ✅ مستقیماً دیتا رو توی سرور کامپوننت می‌گیریم

    const { products, pagination } = data;


    return (
        <>
            <div className="w-full">
                <DiscounterBanner />
            </div>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold my-6">
                    محصولات تخفیف‌دار ({pagination.totalcount || products.length})
                </h1>
                <Suspense fallback={<ProductGridSkeleton />}>
                    <ProductGrid products={products} />
                </Suspense>
                {pagination.totalcount > pagination.limit && (

                    <Pagination
                        currentPage={pagination.page}
                        totalCount={pagination.totalcount}
                        pageSize={pagination.limit}
                    />
                )}
            </div>
        </>

    );
}
