import { navLinks } from "../data";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 start-0 px-4 mt-5">

            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4 bg-neutral-950/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:border-white/40">
                <a href="#" className="space-x-3 rtl:space-x-reverse transition-transform duration-300 hover:scale-110 z-50">
                    <span className="font-poppins text-2xl font-bold whitespace-nowrap text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                        NikoHoc
                    </span>
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="md:hidden inline-flex items-center p-2 justify-center text-white rounded-lg border border-white/20 hover:bg-white/10 hover:border-white/50 focus:outline-none transition-all z-50"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div 
                    className={`w-full md:flex md:w-auto md:items-center transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 md:max-h-screen md:opacity-100 md:mt-0"}`}
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 border border-white/20 rounded-xl md:flex-row md:space-x-2 lg:space-x-4 md:border-0 md:bg-transparent bg-neutral-900/80 md:items-center shadow-[0_0_15px_rgba(255,255,255,0.05)] md:shadow-none">
                        {navLinks.map((nav, index) => (
                        <li key={index}>
                            <a
                                href={`#${nav.href}`}
                                className="block py-2.5 px-4 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white md:hover:bg-transparent md:hover:text-white md:hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {nav.name}
                            </a>
                        </li>
                        ))}
                        <li className="mt-4 md:mt-0 pt-4 md:pt-0 border-t border-white/20 md:border-0 md:ml-4">
                            <a 
                                href="/resume.pdf" 
                                download="nikohoc_resume.pdf"
                                className="flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 md:py-2 rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95 text-sm shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
                                onClick={() => setIsOpen(false)}
                            >
                                <Download size={16} className="stroke-[3px]" />
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;