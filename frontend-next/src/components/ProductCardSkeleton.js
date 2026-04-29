export default function ProductCardSkeleton() {
    return (
        <div className="bg-gray-100 rounded-xl animate-pulse">
            <div className="h-68 bg-gray-200 rounded-t-xl" />
            <div className="p-4 space-y-8">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-5 bg-gray-200 rounded w-1/2" />
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-2" />
            </div>
        </div>
    );
}
