import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, Instagram } from "lucide-react";
import { personal } from "../data/index"; 
import { motion, type Variants } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [copiedItem, setCopiedItem] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:${personal.socials.email_address}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    const handleCopy = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopiedItem(type);
        setTimeout(() => setCopiedItem(null), 2000); 
    };

    // 1. Variant untuk Header
    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // 2. Variant untuk Form (Muncul dari kiri)
    const formVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
    };

    // 3. Variant untuk Container Kartu Kontak Kanan (Stagger)
    const rightColVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
            }
        }
    };

    // 4. Variant untuk Masing-masing Kartu (Muncul dari kanan)
    const cardVariants: Variants = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="contact" className="py-20 flex flex-col items-start gap-8 max-w-7xl mx-auto w-full overflow-hidden">
            
            {/* HEADER */}
            <motion.div 
                className="flex flex-col items-start w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={headerVariants}
            >
                <h1 className="font-poppins font-bold text-4xl text-white mb-2">
                    Contact
                </h1>
                <div className="h-0.5 w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full mb-6"></div>
                <h2 className="text-2xl font-bold text-blue-500 mb-2">
                    {personal.contact.headline}
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl whitespace-pre-line">
                    {personal.contact.description}
                </p>
            </motion.div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 mt-4">
                
                {/* KOLOM KIRI (FORM) */}
                <motion.div 
                    className="lg:col-span-3 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg flex flex-col justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={formVariants}
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                                <input 
                                    type="text" id="name" name="name" required
                                    value={formData.name} onChange={handleChange}
                                    className="bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors" 
                                    placeholder="Name" 
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                                <input 
                                    type="email" id="email" name="email" required
                                    value={formData.email} onChange={handleChange}
                                    className="bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors" 
                                    placeholder="Email" 
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                            <input 
                                type="text" id="subject" name="subject" required
                                value={formData.subject} onChange={handleChange}
                                className="bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors" 
                                placeholder="Collaboration / Project Inquiry" 
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                            <textarea 
                                id="message" name="message" rows={5} required
                                value={formData.message} onChange={handleChange}
                                className="bg-neutral-950 border border-neutral-800 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors resize-none" 
                                placeholder="Let's talk about..." 
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all active:scale-95 mt-2"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* KOLOM KANAN (KARTU KONTAK) */}
                <motion.div 
                    className="lg:col-span-2 flex flex-col gap-4 justify-between h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={rightColVariants}
                >
                    <motion.div variants={cardVariants} className="group flex items-center justify-between p-4 sm:p-5 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-full bg-neutral-950 text-blue-500 border border-neutral-800 group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-xs sm:text-sm text-gray-400 font-medium">Email</span>
                                <span className="text-sm sm:text-base text-white font-semibold truncate">{personal.socials.email_address}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleCopy(personal.socials.email_address, 'email')}
                            className="p-2 ml-2 shrink-0 text-gray-400 hover:text-white bg-neutral-950 border border-neutral-800 rounded-lg transition-colors"
                            aria-label="Copy Email"
                        >
                            {copiedItem === 'email' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                        </button>
                    </motion.div>

                    <motion.div variants={cardVariants} className="group flex items-center justify-between p-4 sm:p-5 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-full bg-neutral-950 text-green-500 border border-neutral-800 group-hover:scale-110 transition-transform">
                                <Phone size={20} />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-xs sm:text-sm text-gray-400 font-medium">Phone / WhatsApp</span>
                                <span className="text-sm sm:text-base text-white font-semibold truncate">{personal.contact.phone}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleCopy(personal.contact.phone, 'phone')}
                            className="p-2 ml-2 shrink-0 text-gray-400 hover:text-white bg-neutral-950 border border-neutral-800 rounded-lg transition-colors"
                            aria-label="Copy Phone"
                        >
                            {copiedItem === 'phone' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                        </button>
                    </motion.div>

                    <motion.div variants={cardVariants} className="group flex items-center p-4 sm:p-5 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-300 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-full bg-neutral-950 text-red-500 border border-neutral-800 group-hover:scale-110 transition-transform">
                                <MapPin size={20} />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-xs sm:text-sm text-gray-400 font-medium">Location</span>
                                <span className="text-sm sm:text-base text-white font-semibold truncate">{personal.contact.location}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={cardVariants} className="group flex flex-col justify-center p-4 sm:p-5 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                        <span className="text-xs sm:text-sm text-gray-400 font-medium mb-3">Find Me On</span>
                        <div className="flex items-center gap-4">
                            <a href={personal.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-neutral-950 text-gray-300 border border-neutral-800 hover:text-white hover:border-white transition-all hover:scale-110">
                                <Github size={20} />
                            </a>
                            <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-neutral-950 text-blue-500 border border-neutral-800 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all hover:scale-110">
                                <Linkedin size={20} />
                            </a>
                            <a href={personal.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-neutral-950 text-pink-500 border border-neutral-800 hover:text-white hover:border-pink-500 hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 transition-all hover:scale-110">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>        
    )
}

export default Contact;