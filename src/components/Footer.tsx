import { personal } from "../data";
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
        <footer id="footer" className="bg-neutral-950 text-gray-400 border-t border-neutral-900 py-8 mt-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex-1 flex justify-center md:justify-start">
                    <h2 className="text-xl font-bold text-white font-poppins">
                        {personal.nickname}
                    </h2>
                </div>
                <div className="flex-1 flex justify-center text-center">
                    <p className="text-sm">
                        © {year} All rights reserved.
                    </p>
                </div>
                <div className="flex-1 flex justify-center md:justify-end gap-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
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