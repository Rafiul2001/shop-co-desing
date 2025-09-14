import React, { useEffect, useRef, useState } from 'react'
import { useProductContext } from '../contexts/ProductContext';
import ProductCard from './ProductCard';

type TFilter = {
    categories: string[]
}

type TSortType =
    | "alpha-asc"
    | "alpha-desc"
    | "price-asc"
    | "price-desc";

const sortOptions: { value: TSortType; label: string }[] = [
    { value: "alpha-asc", label: "Alphabetical (A-Z)" },
    { value: "alpha-desc", label: "Alphabetical (Z-A)" },
    { value: "price-asc", label: "Price (Low to High)" },
    { value: "price-desc", label: "Price (High to Low)" },
];

const ProductList2: React.FC = () => {
    const { products, loading, searchText, setSearchText, filteredProducts } = useProductContext();
    const [filter, setFilter] = useState<TFilter>({ categories: [] });
    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState<TSortType>("alpha-asc");
    const [catDropdownOpen, setCatDropdownOpen] = useState(false);
    const pageSize = 8;

    // Ref for scrolling to top of products
    const topRef = useRef<HTMLDivElement>(null);

    // Get all unique categories
    const category = new Set(products.map((pd) => pd.category));

    // Handle checkbox input change for categories
    const handleSelectedInput = (cat: string) => {
        setFilter((prev) => {
            if (!prev.categories.includes(cat)) {
                return { ...prev, categories: [...prev.categories, cat] };
            } else {
                // Remove category if unchecked
                return { ...prev, categories: prev.categories.filter((c) => c !== cat) };
            }
        });
    };

    // Filter products based on selected categories
    const getFilteredProducts = () => {
        let data = !!searchText ? filteredProducts : products;
        if (filter.categories.length > 0) {
            return data.filter((pd) => filter.categories.includes(pd.category));
        }
        return data;
    };

    // Sort products according to sortType
    const sortProducts = (prods: typeof products) => {
        const sorted = [...prods];
        switch (sortType) {
            case "alpha-asc":
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "alpha-desc":
                sorted.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "price-asc":
                sorted.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                sorted.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        return sorted;
    };

    const filteredToShow = sortProducts(getFilteredProducts());

    // Pagination logic
    const totalPages = Math.ceil(filteredToShow.length / pageSize);
    const paginatedProducts = filteredToShow.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    // Scroll to top of products when currentPage changes
    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    // Also scroll to top when filter/search/sort changes
    useEffect(() => {
        setCurrentPage(1); // Reset to first page on filter or search change
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [filter, searchText, sortType]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-lg text-gray-500">Loading products...</span>
            </div>
        );
    }

    return (
        <div className="p-2 sm:p-4 max-w-7xl mx-auto">
            {/* Search Bar Start */}
            <form className="flex lg:hidden flex-row items-center gap-2 sm:gap-3 py-2 sm:py-3 px-2 sm:px-4 w-full mx-auto rounded-[32px] sm:rounded-[62px] bg-white border border-gray-300 sm:border-gray-400 mb-3">
                <img src="search-icon.svg" alt="search-icon" className="w-5 h-5 sm:w-6 sm:h-6" />
                <input
                    className="flex-1 border-0 outline-0 text-sm sm:text-base bg-transparent"
                    type="search"
                    name="search-products"
                    id="search-products"
                    placeholder="Search for products"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                />
            </form>
            {/* Search Bar End */}

            <div className='flex flex-col lg:flex-row gap-3 py-6 sm:py-8'>
                {/* Filter Sidebar */}
                <div className='lg:flex-1 xl:max-w-xs bg-white rounded-xl p-4 min-w-fit sm:min-w-[200px] mb-4 lg:mb-0 h-fit'>
                    <h2 className='text-base sm:text-xl font-semibold mb-2 sm:mb-3'>Filter</h2>
                    {/* Small screen dropdown */}
                    <div className="block lg:hidden mb-2">
                        <button
                            type="button"
                            className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md border border-gray-300 text-sm font-medium"
                            onClick={() => setCatDropdownOpen((prev) => !prev)}
                        >
                            Categories
                            <span className={`transition-transform ${catDropdownOpen ? "rotate-180" : ""}`}>
                                ▼
                            </span>
                        </button>
                        {catDropdownOpen && (
                            <form className="mt-2 bg-white border border-gray-200 rounded shadow">
                                <div className="grid grid-cols-2 gap-2 p-2">
                                    {[...category].map((cat) => (
                                        <div key={cat} className='flex gap-2 items-center'>
                                            <input
                                                type='checkbox'
                                                id={`mobile-${cat}`}
                                                value={cat}
                                                checked={filter.categories.includes(cat)}
                                                onChange={() => handleSelectedInput(cat)}
                                                className="w-4 h-4 accent-indigo-600"
                                            />
                                            <label htmlFor={`mobile-${cat}`} className="text-xs">{cat}</label>
                                        </div>
                                    ))}
                                </div>
                            </form>
                        )}
                    </div>
                    {/* Large screen category list */}
                    <form className="hidden lg:block">
                        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                            {[...category].map((cat) => (
                                <div key={cat} className='flex gap-2 items-center'>
                                    <input
                                        type='checkbox'
                                        id={cat}
                                        value={cat}
                                        checked={filter.categories.includes(cat)}
                                        onChange={() => handleSelectedInput(cat)}
                                        className="w-4 h-4 accent-indigo-600"
                                    />
                                    <label htmlFor={cat} className="text-xs sm:text-sm">{cat}</label>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
                {/* Product List + Sort + Pagination */}
                <div className='lg:flex-auto w-full'>
                    {/* Sort Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2" ref={topRef}>
                        <span className="text-base sm:text-lg font-semibold">Products</span>
                        <div>
                            <label htmlFor="sort-products" className="mr-2 font-medium text-sm sm:text-base">Sort By:</label>
                            <select
                                id="sort-products"
                                value={sortType}
                                onChange={(e) => setSortType(e.target.value as TSortType)}
                                className="px-2 py-1 sm:px-3 sm:py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-xs sm:text-sm"
                            >
                                {sortOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {filteredToShow.length === 0 && (
                        <h2 className="text-center text-lg sm:text-2xl text-red-500 py-8">No products found!</h2>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 justify-center">
                        {paginatedProducts.map((product) => (
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
                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex flex-wrap justify-center my-4 gap-2">
                            <button
                                className={`px-3 py-1 rounded-md bg-gray-200 text-xs sm:text-sm ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            >
                                Prev
                            </button>
                            {Array.from({ length: totalPages }, (_, idx) => (
                                <button
                                    key={idx + 1}
                                    className={`px-3 py-1 rounded-md text-xs sm:text-sm ${currentPage === idx + 1
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    onClick={() => setCurrentPage(idx + 1)}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                            <button
                                className={`px-3 py-1 rounded-md bg-gray-200 text-xs sm:text-sm ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList2;