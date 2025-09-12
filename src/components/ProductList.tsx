import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import type { TProduct } from "../types/productType";

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<TProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getAllProducts = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axios("https://dummyjson.com/products")
            setProducts(response.data.products)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getAllProducts()
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-lg text-gray-500">Loading products...</span>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 p-4">
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