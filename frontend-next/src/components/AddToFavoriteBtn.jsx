"use client"

import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { toast } from "sonner";


const AddToFavoriteBtn = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedFavorites = JSON.parse(window.localStorage.getItem("favoriteproducts")) || [];
        setIsFavorite(storedFavorites.some(fav => fav.id === product.id));
    }, [product.id]);

    const handleAddOrRemoveFavorite = (product) => {
        // گرفتن لیست قبلی از لوکال استوریج (اگر خالی بود یک آرایه خالی می‌سازد)
        var storedFavorites = JSON.parse(window.localStorage.getItem("favoriteproducts")) || [];

        // بررسی اینکه آیا محصول از قبل در لیست هست یا خیر
        const isExist = storedFavorites.some(fav => fav.id === product.id);

        if (!isExist) {
            // اگر نبود، محصول جدید را به آرایه اضافه کن
            storedFavorites.push(product);
            // ذخیره آرایه جدید در لوکال استوریج
            window.localStorage.setItem("favoriteproducts", JSON.stringify(storedFavorites));
            setIsFavorite(true)
            toast.success("محصول به علاقه مندی ها اضافه شد")
        } else {
            storedFavorites = storedFavorites.filter(fav => fav.id !== product.id)
            window.localStorage.setItem("favoriteproducts", JSON.stringify(storedFavorites));
            setIsFavorite(false)
            toast.error("محصول از علاقه مندی ها حذف شد")
        }
    }

    return (
        <button
            onClick={() => handleAddOrRemoveFavorite(product)}
            className="w-8 h-8 md:w-9 md:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all hover:bg-white p-1.5 md:p-2"
        >
            {
                isFavorite ? (

                    <FaHeart color="red" />
                )
                    : (
                        <FaRegHeart />
                    )
            }

        </button>
    )
}

export default AddToFavoriteBtn;
