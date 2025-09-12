import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import type { TProduct } from "../types/productType";
import { useProductContext } from "../contexts/ProductContext";

const ProductList: React.FC = () => {
    const { products, setProducts, loading, setLoading } = useProductContext();
    const [visibleCount, setVisibleCount] = useState(8); // show 8 products initially

    const getAllProducts = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios("https://dummyjson.com/products");
            setProducts(response.data.products as TProduct[]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [setProducts, setLoading]);

    useEffect(() => {
        getAllProducts();
    }, [getAllProducts]);

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
                {products.slice(0, visibleCount).map((product) => (
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

            {/* See More / Show Less Buttons */}
            <div className="flex justify-center my-4">
                {visibleCount < products.length ? (
                    <button
                        onClick={() => setVisibleCount((prev) => prev + 8)} // load 8 more
                        className="px-6 py-2 cursor-pointer bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                    >
                        See More
                    </button>
                ) : (
                    products.length > 8 && (
                        <button
                            onClick={() => setVisibleCount(8)} // reset back to 8
                            className="px-6 py-2 cursor-pointer bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                        >
                            Show Less
                        </button>
                    )
                )}
            </div>
        </div>
    );
};

export default ProductList;
