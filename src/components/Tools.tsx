import { FaStar } from "react-icons/fa";
import { toolsData } from "../data/index";

const Tool = () => {
    return (
        <section id="tools" className="py-20 flex flex-col items-start gap-4 max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-start">
                <h1 className="font-poppins font-bold text-4xl text-white mb-2 text-left">
                    Tools & Tech Stack
                </h1>
                <div className="h-0.5 w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full"></div>
                <p className="text-sm mt-3 text-left italic text-gray-400 font-mono">
                    // Things that i used...
                </p>
            </div>
            
            <div className="w-full">
                <div 
                    className="flex overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4 pb-6 snap-x snap-mandatory scroll-smooth"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {toolsData.map((tool, index) => (
                        <div 
                            key={index} 
                            className="group relative flex-shrink-0 w-64 sm:w-auto flex flex-row items-center p-4 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 snap-center"
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
                        </div>
                    ))}
                </div>

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