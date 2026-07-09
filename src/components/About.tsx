import { User, MapPin, GraduationCap, CheckCircle2 } from "lucide-react";
import { personal, toolsData } from "../data/index";
import niko from "../assets/niko-4.jpeg";

const About = () => {
    const marqueeItems = [...toolsData, ...toolsData, ...toolsData];

    return (
        <section id="about" className="py-20 flex flex-col items-start gap-4 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start w-full mb-4">
                <h1 className="font-poppins font-bold text-4xl text-white mb-2 text-left">
                    About Me
                </h1>
                <div className="h-0.5 w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full"></div>
                <p className="text-sm mt-3 text-left italic text-gray-400 font-mono">
                    // Get to know me better...
                </p>
            </div>

            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.3333%); }
                    }
                    .animate-marquee {
                        display: flex;
                        width: max-content;
                        animation: scroll 30s linear infinite;
                    }
                `}
            </style>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 w-full items-stretch">

                <div className="w-full lg:w-2/5 flex flex-col gap-3">
                    <h3 className="text-2xl font-bold text-white">My Profile</h3>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-lg hover:border-blue-500/50 transition-colors duration-300 flex flex-col flex-grow">
                        <div className="w-full aspect-square rounded-2xl overflow-hidden mb-8 border-2 border-neutral-800 shrink-0">
                            <img 
                                src={niko} 
                                alt="Profile" 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col gap-5 grow justify-center">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-blue-500 shrink-0">
                                    <User size={20} />
                                </div>
                                <span className="font-semibold text-white text-base md:text-lg">
                                    {personal.name}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-red-500 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <span className="font-medium text-sm md:text-base">
                                    {personal.location}
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-green-500 shrink-0">
                                    <GraduationCap size={20} />
                                </div>
                                <span className="font-medium text-sm md:text-base">
                                    {personal.university}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-3/5 flex flex-col gap-8 h-full justify-start">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-2xl font-bold text-white">Who am I?</h3>
                        <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
                            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                                {personal.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-2xl font-bold text-white">My Interests</h3>
                        <div className="flex flex-col gap-4">
                            {personal.interests.map((interest, index) => (
                                <div key={index} className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 p-4 rounded-xl hover:border-blue-500/30 transition-colors">
                                    <CheckCircle2 size={24} className="text-blue-500 shrink-0 mt-0.5" />
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {interest}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-4 bg-neutral-900 border border-neutral-800 rounded-2xl py-3 overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-900 to-transparent z-10"></div>
                
                <div className="animate-marquee flex items-center gap-8">
                    {marqueeItems.map((tool, index) => (
                        <div key={index} className="flex items-center gap-2 px-2">
                            <span className="text-blue-500 text-sm font-black shrink-0">•</span>
                            <span className="text-gray-300 font-semibold text-sm md:text-base whitespace-nowrap">
                                {tool.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;