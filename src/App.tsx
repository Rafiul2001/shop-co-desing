import type React from "react"
import Header from "./components/Header"
import { Outlet } from "react-router"
import Footer from "./components/Footer"
import { useCallback, useEffect } from "react"
import { useProductContext } from "./contexts/ProductContext"
import axios from "axios"

const App: React.FC = () => {
  const { setLoading, setProducts } = useProductContext()

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
  }, [setProducts])

  useEffect(() => {
    getAllProducts()
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App