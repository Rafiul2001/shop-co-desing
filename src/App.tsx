import type React from "react"
import Header from "./components/Header"
import { Outlet } from "react-router"
import Footer from "./components/Footer"

const App: React.FC = () => {
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