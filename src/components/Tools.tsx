import { FaStar } from "react-icons/fa";
import { toolsData } from "../data/index";

const Tool = () => {
    return (
        <section id="tools" className="py-20 flex flex-col items-start gap-12 max-w-7xl mx-auto w-full">
            {/* Judul Diubah Rata Kiri */}
            <div className="flex flex-col items-start">
                <h1 className="font-poppins font-bold text-4xl text-white mb-4 text-left">
                    Tools & Tech Stack
                </h1>
                <div className="h-0.5 w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full"></div>
            </div>
            
            <div className="w-full">
                {/* - Ditambahkan pt-4 agar memberikan ruang vertikal sehingga saat di-hover (-translate-y-2) tidak terpotong (crop) oleh overflow-x-auto.
                  - Jarak gap ditingkatkan menjadi gap-6 untuk estetika yang lebih renggang dan rapi.
                */}
                <div 
                    className="flex overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 pb-6 snap-x snap-mandatory scroll-smooth"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {toolsData.map((tool, index) => (
                        <div 
                            key={index} 
                            className="group relative flex-shrink-0 w-64 sm:w-auto flex flex-row items-center p-4 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 snap-center"
                        >
                            {/* Bintang Favorit di pojok kanan atas jika true */}
                            {tool.isFavorite && (
                                <FaStar className="absolute top-3 right-3 text-yellow-500 text-xs opacity-80" />
                            )}
                            
                            {/* Logo Tool */}
                            <div className={`text-4xl mr-4 transition-transform duration-300 group-hover:scale-110 ${tool.color}`}>
                                <tool.icon />
                            </div>
                            
                            {/* Keterangan Teks Kategori */}
                            <div className="flex flex-col text-left">
                                <h4 className="text-white font-semibold text-base leading-tight">
                                    {tool.name}
                                </h4>
                                <span className="text-xs text-gray-400 mt-1">
                                    {tool.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note petunjuk geser khusus untuk Layar HP / Mobile (sm:hidden) */}
                <div className="sm:hidden flex justify-start mt-2 px-1">
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1 tracking-wide animate-pulse">
                        Swipe to see more &rarr;
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Tool;