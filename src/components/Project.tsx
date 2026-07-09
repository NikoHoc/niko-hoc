import { useState, useRef, useEffect } from "react";
import { projects } from "../data/index"; 
import { ExternalLink, FolderGit2, ChevronLeft, ChevronRight, X } from "lucide-react";

type ProjectType = typeof projects[0];

const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [maxReachableIndex, setMaxReachableIndex] = useState(0);

    const [modalData, setModalData] = useState<ProjectType | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const updateScrollBounds = () => {
        if (!carouselRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setIsAtStart(scrollLeft <= 2);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);

        const maxScrollLeft = scrollWidth - clientWidth;
        let reachable = 0;
        cardRefs.current.forEach((card, i) => {
            if (!card) return;
            if (card.offsetLeft <= maxScrollLeft + 2) {
                reachable = i;
            }
        });
        setMaxReachableIndex(reachable);
    };

    const handleScroll = () => {
        if (!carouselRef.current) return;
        const scrollLeft = carouselRef.current.scrollLeft;

        let closestIndex = 0;
        let closestDistance = Infinity;
        cardRefs.current.forEach((card, i) => {
            if (!card) return;
            const distance = Math.abs(card.offsetLeft - scrollLeft);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = i;
            }
        });
        setCurrentIndex(closestIndex);
        updateScrollBounds();
    };

    useEffect(() => {
        updateScrollBounds();
        window.addEventListener("resize", updateScrollBounds);
        return () => window.removeEventListener("resize", updateScrollBounds);
    }, []);
    const scrollToIndex = (index: number) => {
        const clampedIndex = Math.max(0, Math.min(index, maxReachableIndex));
        const card = cardRefs.current[clampedIndex];
        if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
    };

    const scrollPrev = () => scrollToIndex(currentIndex - 1);
    const scrollNext = () => scrollToIndex(currentIndex + 1);

    const scrollToDot = (index: number) => scrollToIndex(index);

    const openModal = (project: ProjectType) => {
        setModalData(project);
        document.body.style.overflow = 'hidden'; 
        setTimeout(() => setIsModalVisible(true), 10); 
    };

    const closeModal = () => {
        setIsModalVisible(false);
        document.body.style.overflow = 'unset';
        setTimeout(() => setModalData(null), 300);
    };

    return (
        <section id="projects" className="py-20 flex flex-col items-start gap-4 max-w-7xl mx-auto w-full px-4">
            <div className="flex flex-col items-start w-full mb-2">
                <h1 className="font-poppins font-bold text-4xl text-white mb-2 text-left">
                    Projects
                </h1>
                <div className="h-0.5 w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full"></div>
                <p className="text-sm mt-3 text-left italic text-gray-400 font-mono">
                    // My recent works...
                </p>
            </div>

            <div className="relative w-full">
                
                <div className="flex items-center w-full gap-4 lg:gap-8">
                    <button 
                        onClick={scrollPrev}
                        disabled={isAtStart}
                        className={`hidden md:flex flex-shrink-0 z-10 p-3 rounded-full bg-neutral-900 border shadow-xl transition-all duration-300 active:scale-95 ${isAtStart ? 'border-neutral-800 opacity-40 cursor-not-allowed' : 'border-neutral-700 hover:bg-neutral-800 hover:text-blue-500 hover:scale-110 hover:border-blue-500'}`}
                        aria-label="Previous Project"
                    >
                        <ChevronLeft size={24} className="text-white" />
                    </button>

                    <div 
                        ref={carouselRef}
                        onScroll={handleScroll}
                        className="relative flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 flex-1 min-w-0 pb-4 pt-2"
                        style={{ scrollbarWidth: 'none' }} 
                    >
                        {projects.map((project, index) => {
                            const visibleTools = project.tools.slice(0, 4);
                            const remainingToolsCount = project.tools.length - 4;

                            return (
                                <div 
                                    key={project.id} 
                                    ref={(el) => { cardRefs.current[index] = el; }}
                                    className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 snap-center md:snap-start flex-shrink-0 w-full md:w-[calc(50%-0.75rem)]"
                                >
                                    <div className="relative h-56 w-full overflow-hidden shrink-0">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "https://placehold.co/600x400/1a1a1a/FFF?text=No+Image";
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60"></div>
                                    </div>

                                    <div className="p-6 flex flex-col grow">
                                        <div className="mb-3">
                                            <h3 className="text-xl font-bold text-white font-poppins group-hover:text-blue-400 transition-colors line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                                                {project.subtitle} <span className="text-gray-500 mx-1">•</span> {project.date}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {visibleTools.map((tool, index) => (
                                                <span 
                                                    key={index} 
                                                    className="px-3 py-1 text-[10px] sm:text-xs font-medium bg-neutral-800 text-gray-300 rounded-full border border-neutral-700"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                            {remainingToolsCount > 0 && (
                                                <span className="px-3 py-1 text-[10px] sm:text-xs font-medium bg-neutral-800/50 text-gray-400 rounded-full border border-neutral-700 border-dashed">
                                                    +{remainingToolsCount} more
                                                </span>
                                            )}
                                        </div>

                                        <div className="mt-auto flex flex-col gap-4">
                                            <button 
                                                onClick={() => openModal(project)}
                                                className="text-blue-500 text-sm font-semibold hover:text-blue-400 transition-colors w-fit flex items-center gap-1 group/btn"
                                            >
                                                View Details <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                                            </button>

                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-neutral-800 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors duration-300 group-hover:bg-blue-600"
                                            >
                                                {project.link.includes("github") ? <FolderGit2 size={16} /> : <ExternalLink size={16} />}
                                                Visit Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button 
                        onClick={scrollNext}
                        disabled={isAtEnd}
                        className={`hidden md:flex flex-shrink-0 z-10 p-3 rounded-full bg-neutral-900 border shadow-xl transition-all duration-300 active:scale-95 ${isAtEnd ? 'border-neutral-800 opacity-40 cursor-not-allowed' : 'border-neutral-700 hover:bg-neutral-800 hover:text-blue-500 hover:scale-110 hover:border-blue-500'}`}
                        aria-label="Next Project"
                    >
                        <ChevronRight size={24} className="text-white" />
                    </button>

                </div>

                <div className="md:hidden flex items-center justify-between mt-4 w-full px-2">
                    <button onClick={scrollPrev} disabled={isAtStart} className={`p-2 rounded-full border transition-colors ${isAtStart ? 'border-neutral-800 text-neutral-600' : 'border-neutral-500 text-white hover:bg-neutral-700 active:scale-95'}`}><ChevronLeft size={20}/></button>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Swipe to explore</span>
                    <button onClick={scrollNext} disabled={isAtEnd} className={`p-2 rounded-full border transition-colors ${isAtEnd ? 'border-neutral-800 text-neutral-600' : 'border-neutral-500 text-white hover:bg-neutral-700 active:scale-95'}`}><ChevronRight size={20}/></button>
                </div>

                <div className="flex justify-center items-center gap-2 mt-6">
                    {Array.from({ length: maxReachableIndex + 1 }).map((_, i) => (
                        <button 
                            key={i} 
                            onClick={() => scrollToDot(i)}
                            className={`rounded-full transition-all duration-300 ${currentIndex === i ? 'w-6 h-2 bg-blue-500' : 'w-2 h-2 bg-neutral-700 hover:bg-neutral-500'}`}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {modalData && (
                <div 
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div 
                        className={`relative bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl transition-all duration-300 transform ${isModalVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
                    >

                        <button 
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500 text-white rounded-full transition-colors backdrop-blur-md"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-full h-48 sm:h-64 shrink-0 relative">
                            <img 
                                src={modalData.image} 
                                alt={modalData.title} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://placehold.co/800x400/1a1a1a/FFF?text=No+Image";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                        </div>

                        <div className="p-6 sm:p-8 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white font-poppins mb-1">
                                {modalData.title}
                            </h2>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-6">
                                <span className="text-blue-500 font-semibold uppercase tracking-wide text-sm">
                                    {modalData.subtitle}
                                </span>
                                <span className="hidden sm:block text-neutral-600">•</span>
                                <span className="text-gray-400 text-sm font-medium">{modalData.date}</span>
                            </div>

                            <h4 className="text-white font-semibold mb-2">Overview</h4>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 whitespace-pre-line">
                                {modalData.description}
                            </p>

                            <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {modalData.tools.map((tool, index) => (
                                    <span 
                                        key={index} 
                                        className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-neutral-800 text-gray-200 rounded-lg border border-neutral-700"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 border-t border-neutral-800 bg-neutral-900/90 backdrop-blur-md shrink-0">
                            <a 
                                href={modalData.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all active:scale-[0.98]"
                            >
                                {modalData.link.includes("github") ? <FolderGit2 size={18} /> : <ExternalLink size={18} />}
                                Visit Project
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Project;