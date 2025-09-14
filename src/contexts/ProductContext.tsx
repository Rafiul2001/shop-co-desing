import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
import type { TProduct } from "../types/productType";

type TProductContext = {
    products: TProduct[]
    setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    filteredProducts: TProduct[]
    searchText: string
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}

const ProductContext: React.Context<TProductContext | undefined> = createContext<TProductContext | undefined>(undefined)

export const useProductContext = () => {
    const ctx = useContext(ProductContext)
    if (!ctx) {
        throw new Error("Product context not found!")
    }
    return ctx
}

export const ProductContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [products, setProducts] = useState<TProduct[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([])
    const [searchText, setSearchText] = useState<string>("")

    useEffect(() => {
        let filtered = products.filter((pd) =>
            pd.title.toLowerCase().includes(searchText.toLowerCase())
        );
        // If no results found by title, search by description
        if (searchText && filtered.length === 0) {
            filtered = products.filter((pd) =>
                pd.description.toLowerCase().includes(searchText.toLowerCase())
            );
        }
        if (searchText) setFilteredProducts(filtered);
        else setFilteredProducts([]);
    }, [searchText, products]);

    return (
        <ProductContext.Provider value={{ products, setProducts, loading, setLoading, filteredProducts, searchText, setSearchText }}>
            {children}
        </ProductContext.Provider>
    )
}