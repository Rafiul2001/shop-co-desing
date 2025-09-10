import type React from "react"

const Header: React.FC = () => {
    return (
        <div className="font-poppins">
            <div className="w-full bg-black flex justify-center items-center gap-1 py-2">
                <h3 className="text-gray-300">Sign up and get 20% off to your first order.</h3>
                <a href="/" className="text-white underline">Sign Up Now</a>
            </div>
            <div className="max-w-7xl mx-auto flex items-center justify-between py-6">
                <img src="SHOP.CO Icon.png" alt="icon" />
                <ul className="flex items-center gap-6">
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
                <div className="flex items-center gap-3 py-3 px-4 max-w-xl w-full rounded-[62px] bg-[#F0F0F0]">
                    <img src="search-icon.svg" alt="search-icon" />
                    <input className="flex-1 border-0 outline-0" type="search" name="search-products" id="search-products" placeholder="Search for products" />
                </div>
                <div className="flex items-center gap-3">
                    <img src="cartIcon.svg" alt="cartIcon" />
                    <img src="userIcon.svg" alt="userIcon" />
                </div>
            </div>
        </div>
    )
}

export default Header