export default function RatingStars({ rating, starsize = 20 }) {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<span key={i} className={`text-yellow-400`} style={{ fontSize: `${starsize}px` }}>★</span>);
        } else {
            stars.push(<span key={i} className={`text-gray-300`} style={{ fontSize: `${starsize}px` }}>★</span>);
        }
    }
    return stars;
}
