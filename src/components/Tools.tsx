import { toolsData } from "../data/index";
const Tool = () => {
    return (
        <section id="tools" className="py-20 flex flex-col items-center gap-12">
            <div className="flex flex-col items-center mb-12">
                <h1 className="font-poppins font-bold text-4xl text-white mb-4">
                    Tools & Tech Stack
                </h1>
                <div className="h-0.5 w-50 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full"></div>
            </div>
            <div className="w-full px-4">
                <div className="flex flex-col gap-6 mb-10">
                    <h3 className="text-xl font-semibold text-gray-300 border-l-4 border-blue-500 pl-3">
                        Tech Stack I Used
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {toolsData.used.map((tool, index) => (
                        <div 
                            key={index} 
                            className="group flex flex-col items-center justify-center p-4 bg-neutral-900 border border-neutral-800 rounded-xl w-24 h-24 transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            <div className={`text-4xl mb-2 transition-colors ${tool.color} grayscale group-hover:grayscale-0`}>
                                <tool.icon />
                            </div>
                            <span className="text-xs text-gray-400 font-medium group-hover:text-white">
                                {tool.name}
                            </span>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-semibold text-gray-300 border-l-4 border-green-500 pl-3">
                        Currently Learning
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {toolsData.learning.map((tool, index) => (
                        <div 
                            key={index} 
                            className="group flex flex-col items-center justify-center p-4 bg-neutral-900 border border-neutral-800 rounded-xl w-24 h-24 transition-all duration-300 hover:scale-110 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20"
                        >
                            <div className={`text-4xl mb-2 transition-colors ${tool.color} grayscale group-hover:grayscale-0`}>
                                <tool.icon />
                            </div>
                            <span className="text-xs text-gray-400 font-medium group-hover:text-white">
                                {tool.name}
                            </span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tool;