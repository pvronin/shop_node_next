import Comment from "./Comment";

export default function CommentsSection({ comments }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm mt-12">

            {comments && comments.length > 0 ? (
                <div className="space-y-6">
                    {comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center py-4">هنوز نظری برای این محصول ثبت نشده است.</p>
            )}
        </div>
    );
}
