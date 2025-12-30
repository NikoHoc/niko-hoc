import { navLinks } from "../data";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 start-0 backdrop-blur-sm">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4 mt-5 border-b-2 rounded-2xl shadow-[0_0_35px_rgba(59,130,246,0.6)]">
                
                <a href="#" className="space-x-3 rtl:space-x-reverse transition-transform duration-300 hover:scale-110 hover:text-blue-500">
                    <span className="font-poppins text-2xl font-bold whitespace-nowrap">
                        NikoHoc
                    </span>
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        {navLinks.map((nav, index) => (
                        <li key={index}>
                            <a
                                href={`#${nav.href}`}
                                className="block py-2 px-3 rounded hover:bg-white hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 transition-transform duration-200 hover:scale-110 md:hover:scale-120"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                            {nav.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;