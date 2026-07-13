import { FaStar } from "react-icons/fa";
import { toolsData } from "../data/index";
import { motion, type Variants } from "framer-motion";

const Tool = () => {
    // 1. Variant untuk Header
    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // 2. Variant untuk Container Tools (Pembungkus Utama)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Memunculkan per item dengan jeda 0.1 detik agar snappy/cepat
                delayChildren: 0.2,
            }
        }
    };

    // 3. Variant untuk masing-masing item Tool
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <section id="tools" className="py-20 flex flex-col items-start gap-4 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 overflow-hidden">
            
            {/* HEADER ANIMASI */}
            <motion.div 
                className="flex flex-col items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px 0px 0px 0px" }}
                variants={headerVariants}
            >
                <h1 className="font-poppins font-bold text-4xl text-white mb-2 text-left">
                    Tools & Tech Stack
                </h1>
                <div className="h-0.5 w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full"></div>
                <p className="text-sm mt-3 text-left italic text-gray-400 font-mono">
                    // Things that i used...
                </p>
            </motion.div>
            
            <div className="w-full">
                {/* PEMBUNGKUS UTAMA TOOLS DENGAN STAGGER */}
                <motion.div 
                    className="flex overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 pb-6 snap-x snap-mandatory scroll-smooth"
                    style={{ scrollbarWidth: 'none' }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px 0px 0px 0px" }}
                    variants={containerVariants}
                >
                    {toolsData.map((tool, index) => (
                        /* MASING-MASING ITEM TOOL DIBERI ANIMASI */
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className="group relative shrink-0 w-64 sm:w-auto flex flex-row items-center p-4 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 snap-center"
                        >
                            {tool.isFavorite && (
                                <FaStar className="absolute top-3 right-3 text-yellow-500 text-xs opacity-80" />
                            )}
                            
                            <div className={`text-4xl mr-4 transition-transform duration-300 group-hover:scale-110 ${tool.color}`}>
                                <tool.icon />
                            </div>
                            
                            <div className="flex flex-col text-left">
                                <h4 className="text-white font-semibold text-base leading-tight">
                                    {tool.name}
                                </h4>
                                <span className="text-xs text-gray-400 mt-1">
                                    {tool.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* TEKS SWIPE UNTUK MOBILE */}
                <motion.div 
                    className="sm:hidden flex justify-start mt-2 px-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1 tracking-wide animate-pulse">
                        Swipe to see more &rarr;
                    </span>
                </motion.div>
            </div>
        </section>
    )
}

export default Tool;