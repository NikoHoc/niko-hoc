import TextType from './TextType';
import { personal } from '../data/index';
import niko from '../assets/niko-2.jpeg';
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-5 py-20 md:py-0 pt-28 md:pt-0">
            <div className='flex flex-col items-center md:items-start text-center md:text-left gap-6 md:w-3/5'>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                    Hi there! <br /> 
                    <span className="text-blue-500">{personal.nickname}</span> Here 👋
                </h1>

                <div className="text-xl sm:text-2xl md:text-3xl font-semibold flex flex-wrap justify-center md:justify-start items-center gap-x-2 gap-y-1 text-gray-300">
                    <span className="whitespace-nowrap shrink-0">I am a</span>
                    <TextType
                        text={personal.role} 
                        cursorCharacter="|"  
                        className="text-blue-500"
                    />
                </div>

                <p className="text-gray-400 leading-relaxed text-base md:text-xl max-w-xl">
                    {personal.briefDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto px-4 sm:px-0">
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
                </div>
            </div>
            <div className="md:w-2/5 flex justify-center md:justify-end mb-8 md:mb-0">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <img 
                        src={niko} 
                        alt="Hero Image"
                        className="rounded-full object-cover w-full h-full border-4 border-neutral-800 shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-transform duration-500 hover:scale-105 hover:border-blue-500"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;