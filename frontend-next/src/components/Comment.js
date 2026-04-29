import { memo } from "react";
import RatingStars from "./RatingStars";

const Comment = memo(({ comment }) => {
    return (
        <div className="border-b border-b-gray-200 last:border-0 pb-6 group">
            <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-700">{comment.reviewer_name}</span>
                <div className="flex text-yellow-400 text-lg">
                    <RatingStars rating={comment.rating} />
                </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {comment.comment}
            </p>
            <time className="block text-xs text-gray-400 mt-3">
                {new Date(comment.date).toLocaleDateString('fa-IR')}
            </time>
        </div>

    )
})

Comment.displayName = 'Comment';
export default Comment;
