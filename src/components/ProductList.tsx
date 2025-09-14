import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useProductContext } from "../contexts/ProductContext";

const ProductList: React.FC = () => {
    const { products, loading, searchText, setSearchText, filteredProducts } = useProductContext();
    const [visibleCount, setVisibleCount] = useState(8); // show 8 products initially

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-lg text-gray-500">Loading products...</span>
            </div>
        );
    }

    return (
        <div className="p-4 max-w-7xl mx-auto">
            {/* Search Bar */}
            <form className="flex lg:hidden items-center gap-3 py-3 px-4 w-full mx-auto rounded-[62px] bg-white border-[1px] border-gray-400">
                <img src="search-icon.svg" alt="search-icon" />
                <input className="flex-1 border-0 outline-0" type="search" name="search-products" id="search-products" placeholder="Search for products" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
            </form>
            {/* Search Bar */}
            {(!!searchText ? filteredProducts : products).length === 0 && <h2 className="text-center text-2xl text-red-500">No products found!</h2>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center py-8">
                {(!!searchText ? filteredProducts : products).slice(0, visibleCount).map((product) => (
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
                {visibleCount < (!!searchText ? filteredProducts : products).length ? (
                    <button
                        onClick={() => setVisibleCount((prev) => prev + 8)} // load 8 more
                        className="px-6 py-2 cursor-pointer bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                    >
                        See More
                    </button>
                ) : (
                    (!!searchText ? filteredProducts : products).length > 8 && (
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
