import type React from "react"
import { useEffect, useRef, useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router";
import Sidebar from "./SideBar";
import { useProductContext } from "../contexts/ProductContext";

const Header: React.FC = () => {
    const { searchText, setSearchText } = useProductContext()

    const [dropDownVisible, setDropDownVisible] = useState<boolean>(false)
    const userIconRef = useRef<HTMLImageElement>(null)
    const dropDownRef = useRef<HTMLUListElement>(null)

    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropDownVisible &&
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target as Node) &&
                userIconRef.current &&
                !userIconRef.current.contains(event.target as Node)
            ) {
                setDropDownVisible(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [dropDownVisible])

    return (
        <div className="font-poppins">
            <div className="w-full bg-black flex flex-wrap justify-center items-center gap-1 p-2">
                <h3 className="text-gray-300 text-xs">Sign up and get 20% off to your first order.</h3>
                <a href="/" className="text-white underline text-xs">Sign Up Now</a>
            </div>
            <div className="max-w-7xl mx-auto flex gap-8 items-center justify-between py-6 px-4">
                <Link to="/">
                    <img src="SHOP.CO Icon.png" alt="icon" />
                </Link>
                <ul className="hidden xl:flex items-center gap-6">
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
                {/* Search Bar */}
                <form className="hidden lg:flex items-center gap-3 py-3 px-4 max-w-xl w-full rounded-[62px] bg-[#F0F0F0]">
                    <img src="search-icon.svg" alt="search-icon" />
                    <input className="flex-1 border-0 outline-0" type="search" name="search-products" id="search-products" placeholder="Search for products" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </form>
                {/* Search Bar */}
                <div className="flex items-center gap-3">
                    <img src="cartIcon.svg" alt="cartIcon" />
                    <div className="relative">
                        <img
                            src="userIcon.svg"
                            alt="userIcon"
                            ref={userIconRef}
                            onClick={() => setDropDownVisible((v) => !v)}
                            className="cursor-pointer"
                        />
                        <ul
                            ref={dropDownRef}
                            className={
                                `absolute mt-5 p-4 top-full right-0 text-right bg-white border-gray-100 border shadow-xl z-10 w-40 rounded-sm transition-all duration-300 ease-in-out 
                                ${dropDownVisible ? "opacity-100 translate-y-0 visible pointer-events-auto" : "opacity-0 -translate-y-3 invisible pointer-events-none"}`
                            }
                        >
                            <li className="cursor-pointer"><Link to="/login" onClick={() => setDropDownVisible(false)}>Login</Link></li>
                            <li className="cursor-pointer">Register</li>
                        </ul>
                    </div>
                    <BsThreeDotsVertical onClick={() => setOpen(true)} className="xl:hidden" size={24} />
                </div>
            </div>
            <Sidebar open={open} setOpen={setOpen} />
        </div>
    )
}

export default Header