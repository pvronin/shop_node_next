export default function FilterSidebarSkeleton() {
    return (
        <div className="bg-white rounded-xl p-5 space-y-12 animate-pulse border-2 border-gray-200">
            <div className="h-8 bg-gray-200 rounded w-1/2" />
            <div className="space-y-12">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-200 rounded" />
                ))}
            </div>
            <div className="h-10 bg-gray-200 rounded" />
        </div>
    );
}
