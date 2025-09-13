import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

type TSideBarProps = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<TSideBarProps> = ({ open, setOpen }) => {

    return (
        <>
            {/* Sidebar overlay */}
            {
                open && <div
                    className={`fixed inset-0 bg-gray-200/50 z-40 duration-300 ${open ? "pointer-events-auto" : " pointer-events-none"
                        } xl:hidden`}
                    onClick={() => setOpen(false)}
                    aria-label="Close sidebar"
                />
            }

            {/* Sidebar drawer */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} xl:hidden`}
                role="navigation"
                aria-label="Sidebar"
            >
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <Link to="/" onClick={()=> setOpen(false)}>
                        <img src="SHOP.CO Icon.png" alt="icon" />
                    </Link>
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close sidebar"
                        className="text-gray-700"
                    >
                        <IoMdClose size={24} />
                    </button>
                </div>
                <nav className="px-6 py-4">
                    <ul className="flex flex-col xl:hidden gap-4">
                        <li>Shop</li>
                        <li>On Sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;