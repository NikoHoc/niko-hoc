import { projects } from "../data/index"; 
import { ExternalLink, FolderGit2 } from "lucide-react";

const Project = () => {
  return (
    <section id="projects" className="py-20 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center mb-12">
            <h1 className="font-poppins font-bold text-4xl text-white mb-4">
                Projects
            </h1>
            <div className="h-0.5 w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
            {projects.map((project) => (
                <div 
                    key={project.id} 
                    className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col
                    hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                    <div className="relative h-48 w-full overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://placehold.co/600x400/1a1a1a/FFF?text=No+Image";
                            }}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-neutral-900 to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6 flex flex-col grow">
                        <h3 className="text-xl font-bold text-white font-poppins mb-2 group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto mb-6">
                            {project.tools.map((tool, index) => (
                                <span 
                                    key={index} 
                                    className="px-3 py-1 text-xs font-medium bg-neutral-800 text-gray-300 rounded-full border border-neutral-700"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-neutral-800 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors duration-300 group-hover:bg-blue-600"
                        >
                            {project.link.includes("github") ? <FolderGit2 size={16} /> : <ExternalLink size={16} />}
                            Visit Project
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Project;