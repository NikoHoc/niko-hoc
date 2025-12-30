import { personal, navLinks } from "../data";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => { 
    const year = new Date().getFullYear();

    const socialLinks = [
        { icon: <Mail size={20} />, href: personal.socials.gmail, label: "Email" },
        { icon: <Github size={20} />, href: personal.socials.github, label: "GitHub" },
        { icon: <Linkedin size={20} />, href: personal.socials.linkedin, label: "LinkedIn" },
        { icon: <Instagram size={20} />, href: personal.socials.instagram, label: "Instagram" },
    ];

    return (
        <footer id="footer" className="bg-neutral-950 text-gray-400 border-neutral-800">
            <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold text-white font-poppins">
                        {personal.nickname}
                    </h2>
                    <p className="text-sm mt-1">
                        © {year} All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 text-sm font-medium">
                    {navLinks.map((nav) => (
                        <a href={`#${nav.href}`} className="hover:text-blue-500 transition-transform duration-200 hover:scale-120">
                            {nav.name}
                        </a>
                    ))}
                </div>

                <div className="flex gap-4">
                    {socialLinks.map((social) => (
                        <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                        >
                        {social.icon}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    )
}

export default Footer;