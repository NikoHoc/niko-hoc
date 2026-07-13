import TextType from './TextType';
import { personal } from '../data/index';
import niko from '../assets/niko-2.jpeg';
import { ArrowRight, Mail } from "lucide-react";
import { motion, type Variants } from 'framer-motion';

const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4,  
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-5 py-20 md:py-0 pt-28 md:pt-0">
            
            {/* BAGIAN KIRI (Teks & Tombol) dibungkus motion.div dengan variants */}
            <motion.div 
                className='flex flex-col items-center md:items-start text-center md:text-left gap-6 md:w-3/5'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold leading-tight text-white">
                    Hi there! <br /> 
                    <span className="text-blue-500">{personal.nickname}</span> Here 👋
                </motion.h1>

                <motion.div variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-semibold flex flex-wrap justify-center md:justify-start items-center gap-x-2 gap-y-1 text-gray-300">
                    <span className="whitespace-nowrap shrink-0">I am a</span>
                    <TextType
                        text={personal.role} 
                        cursorCharacter="|"  
                        className="text-blue-500"
                    />
                </motion.div>

                <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed text-base md:text-xl max-w-xl">
                    {personal.briefDescription}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto px-4 sm:px-0">
                    <a 
                        href="#projects" 
                        className="group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                    >
                        View Projects
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </a>
                    <a 
                        href="#contact" 
                        className="group flex items-center justify-center gap-2 bg-neutral-800 text-white border border-neutral-700 px-8 py-3.5 rounded-full font-bold text-sm md:text-base hover:bg-neutral-700 hover:border-neutral-500 transition-all active:scale-95"
                    >
                        <Mail size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                        Get in Touch
                    </a>
                </motion.div>
            </motion.div>

            {/* BAGIAN KANAN (Foto Profil) */}
            <motion.div 
                className="md:w-2/5 flex justify-center md:justify-end mb-8 md:mb-0"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <img 
                        src={niko} 
                        alt="Hero Image"
                        /* Border diubah menjadi border-slate-200 agar lebih cerah dan nge-blend dengan tema */
                        className="rounded-full object-cover w-full h-full border-4 border-slate-200 shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-transform duration-500 hover:scale-105 hover:border-blue-500"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero;