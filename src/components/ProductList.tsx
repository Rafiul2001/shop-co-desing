import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface IReview {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    reviews: IReview[];
    description: string;
    images: string[];
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-lg text-gray-500">Loading products...</span>
            </div>
        );
    }

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center py-8 min-h-screen">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.images[0]}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        description={product.description}
                        reviews={product.reviews}
                        onAddToCart={() => alert(`Added ${product.title} to cart!`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;