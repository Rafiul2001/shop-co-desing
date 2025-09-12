import { createContext, useContext, useState, type PropsWithChildren } from "react";
import type { TProduct } from "../types/productType";

type TProductContext = {
    products: TProduct[]
    setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
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
    return (
        <ProductContext.Provider value={{ products, setProducts, loading, setLoading }}>
            {children}
        </ProductContext.Provider>
    )
}