import React from "react";
import { Rating } from "../molecules/Rating";

interface IReview {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface ProductCardProps {
    image: string;
    title: string;
    price: string | number;
    rating: number;
    reviews: IReview[]
    description?: string;
    onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    price,
    rating,
    reviews,
    description,
    onAddToCart
}) => (
    <div className="h-auto bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
        <div className="w-full h-40 overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-contain"
            />
        </div>
        <div className="flex flex-col h-[280px] p-4">
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{title}</h3>
                <h4 className="text-green-700 font-bold my-2">${price}</h4>
                <div className="flex items-center gap-3 text-lg">
                    <Rating className="max-w-[100px] h-auto my-2" rating={rating} /> ({reviews.length})
                </div>
                <p className="text-justify line-clamp-3">{description}</p>
            </div>
            <button
                onClick={onAddToCart}
                className="bg-gray-800 text-white px-6 mt-2 py-2 rounded-lg text-base hover:bg-gray-600 cursor-pointer transition-colors"
            >
                Add to Cart
            </button>
        </div>
    </div>
);

export default ProductCard;