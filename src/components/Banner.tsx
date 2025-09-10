import type React from "react"

const Banner: React.FC = () => {
    return (
        <div className="w-full bg-[#F2F0F1] font-poppins">
            <div className="max-w-7xl mx-auto  flex items-center">
                <div className="flex-1">
                    <h1 className="text-6xl max-w-xl font-alfa-slab-one uppercase">Find clothes that matches your style</h1>
                    <p className="text-[16px] max-w-xl mt-[30px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className="rounded-[62px] py-[14px] px-16 bg-black text-white mt-[32px]">Shop Now</button>
                    <ul className="flex items-center mt-[48px]">
                        <li className="pr-8">
                            <h2 className="text-[40px] font-bold">200+</h2>
                            <p>International Brands</p>
                        </li>
                        <li className="px-8 border-l-2 border-r-2 border-gray-200">
                            <h2 className="text-[40px] font-bold">2,000+</h2>
                            <p>High-Quality Products</p>
                        </li>
                        <li className="pl-8">
                            <h2 className="text-[40px] font-bold">30,000+</h2>
                            <p>Happy Customers</p>
                        </li>
                    </ul>
                </div>

                <div className="flex-1">
                    <img className="" src="BannerImage.png" alt="banner Image" />
                </div>
            </div>
            <div className="bg-black py-[45px]">
                <ul className="max-w-7xl mx-auto flex items-center justify-between">
                    <li><img src="versace.png" alt="versace" /></li>
                    <li><img src="zara.png" alt="zara" /></li>
                    <li>
                        <img src="gucci.png" alt="gucci" />
                    </li>
                    <li>
                        <img src="prada.png" alt="prada" />
                    </li>
                    <li>
                        <img src="calvin klein.png" alt="calvin klein" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Banner