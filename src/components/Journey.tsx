import { journey } from '../data/index';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const Journey = () => {
    return (
        <section id="journey" className="py-20 flex flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center mb-16">
                <h1 className="font-poppins font-bold text-4xl text-white mb-4">
                    Journey
                </h1>
                <div className="h-0.5 w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full"></div>
            </div>
            <div className="max-w-4xl w-full flex flex-col gap-8 relative">
                {/* Garis Vertikal di Belakang (Absolute) */}
                <div className="absolute left-4.75 top-2 bottom-2 w-0.5 bg-neutral-800 md:left-1/2 md:-ml-px"></div>
                {journey.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={item.id} className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            {/* 1. Bagian KOSONG (Spacer untuk desktop agar seimbang) */}
                            <div className="hidden md:block w-5/12"></div>
                            {/* 2. Icon Tengah */}
                            <div className="z-10 absolute left-0 md:relative md:left-auto md:mx-auto flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                {item.title.toLowerCase().includes("school") || item.title.toLowerCase().includes("university") ? (
                                    <GraduationCap size={18} className="text-white" />
                                ) : (
                                    <Briefcase size={18} className="text-white" />
                                )}
                            </div>
                            {/* 3. CARD CONTENT */}
                            <div className="w-[calc(100%-60px)] md:w-5/12 pl-20 md:pl-0">
                                <div className={`p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-white hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-300  ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    
                                    <div className={`flex items-center gap-2 text-blue-400 font-bold mb-2 text-sm ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <Calendar size={14} />
                                        <span>{item.yearRange}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-poppins mb-1">
                                        {item.title.split(',')[0]}
                                    </h3>
                                    <p className="text-gray-400 text-sm font-medium mb-3">
                                        {item.title.split(',')[1] || item.title} 
                                    </p>
                                    <div className={`flex items-center gap-1 text-gray-500 text-xs mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <MapPin size={12} />
                                        <span>{item.location}</span>
                                    </div>
                                    <ul className={`space-y-2 text-gray-400 text-sm leading-relaxed`}>
                                        {item.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Journey;