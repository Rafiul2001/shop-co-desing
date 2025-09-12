import { Link } from "react-router"
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="p-4">
            <div className="max-w-7xl mx-auto flex gap-8 flex-wrap justify-between items-center py-[50px] border-gray-300 border-b-2">
                <div className="basis-full xl:basis-auto">
                    <Link to="/">
                        <img src="SHOP.CO Icon.png" alt="icon" />
                    </Link>
                    <p className="mt-6 max-w-[248px] w-full">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <ul className="flex gap-2 mt-9">
                        <li><FaTwitter size={20} /></li>
                        <li><FaFacebook size={20} /></li>
                        <li><FaInstagram size={20} /></li>
                        <li><FaGithub size={20} /></li>
                    </ul>
                </div>
                <div className="flex-1 text-nowrap">
                    <h2 className="mb-4 font-medium leading-4 uppercase tracking-[3px]">Company</h2>
                    <ul className="leading-[19px] flex flex-col gap-4">
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="flex-1 text-nowrap">
                    <h2 className="mb-4 font-medium leading-4 uppercase tracking-[3px]">Help</h2>
                    <ul className="leading-[19px] flex flex-col gap-4">
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="flex-1 text-nowrap">
                    <h2 className="mb-4 font-medium leading-4 uppercase tracking-[3px]">FAQ</h2>
                    <ul className="leading-[19px] flex flex-col gap-4">
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Orders</li>
                        <li>Payments</li>
                    </ul>
                </div>
                <div className="flex-1 text-nowrap">
                    <h2 className="mb-4 font-medium leading-4 uppercase tracking-[3px]">Resources</h2>
                    <ul className="leading-[19px] flex flex-col gap-4">
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </div>
            </div>
            <h4 className="max-w-7xl mx-auto mt-6 mb-8">Shop.co &copy; 2000-2025, All Rights Reserved</h4>
        </div>
    )
}

export default Footer