import { journey } from '../data/index';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const Journey = () => {
    return (
        <section id="journey" className="py-20 flex flex-col items-start max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start w-full mb-12">
                <h1 className="font-poppins font-bold text-4xl text-white mb-2 text-left">
                    Journey
                </h1>
                <div className="h-0.5 w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full"></div>
                <p className="text-sm mt-3 text-left italic text-gray-400 font-mono">
                    // My journey so far...
                </p>
            </div>

            <div className="w-full relative">
                <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-neutral-800"></div>
                
                <div className="flex flex-col gap-8 md:gap-12">
                    {journey.map((item, index) => {
                        const isEven = index % 2 === 0;
                        const titleParts = item.title.split(',');
                        const role = titleParts[0]?.trim();
                        const company = titleParts[1]?.trim();

                        return (
                            <div key={item.id} className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                
                                <div className="hidden md:block w-1/2"></div>

                                <div className="absolute left-0 top-4 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 border-2 border-neutral-700 hover:border-blue-500 transition-colors duration-300 shadow-lg group">
                                    {item.title.toLowerCase().includes("school") || item.title.toLowerCase().includes("university") || item.title.toLowerCase().includes("graduate") ? (
                                        <GraduationCap size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                                    ) : (
                                        <Briefcase size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                                    )}
                                </div>


                                <div className={`w-full pl-14 md:w-1/2 ${isEven ? 'md:pr-12 md:pl-0' : 'md:pl-12 md:pr-0'}`}>
                                    <div className="p-6 md:p-8 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 text-left group">
                                        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-2 xl:gap-0 mb-4">
                                            <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm">
                                                <Calendar size={15} />
                                                <span>{item.yearRange}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm font-medium">
                                                <MapPin size={14} />
                                                <span>{item.location}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h3 className="text-xl md:text-2xl font-bold text-white font-poppins mb-1 group-hover:text-blue-400 transition-colors">
                                                {role}
                                            </h3>
                                            {company && (
                                                <span className="text-sm md:text-base font-semibold text-neutral-400">
                                                    {company}
                                                </span>
                                            )}
                                        </div>

                                        <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed list-disc list-outside ml-4 marker:text-blue-500">
                                            {item.description.map((desc, i) => (
                                                <li key={i} className="pl-1">{desc}</li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Journey;