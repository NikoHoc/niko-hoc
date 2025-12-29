import TextType from './TextType';
import { personal } from '../data/index';
import niko from '../assets/niko.jpeg';

const Hero = () => {
    return (
        <section id="me" className="h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10 md:py-0">
            <div className='flex flex-col items-start gap-4 md:w-3/5'>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    Hi there! <br /> 
                    <span className="text-blue-500">{personal.nickname}</span> Here 👋
                </h1>
                <div className="text-xl md:text-2xl font-semibold flex gap-2 text-gray-300">
                    <span>I am a</span>
                    <TextType
                    text={personal.role} 
                    cursorCharacter="|"  
                    className="text-blue-500"
                    />
                </div>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-lg">
                    {personal.description}
                </p>
                <a 
                    href="/resume.pdf" 
                    download="nikohoc_resume.pdf" 
                    className="w-fit flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-bold font-poppins shadow-lg shadow-white/20           
                        transition-all duration-300       
                        hover:scale-105 hover:bg-gray-100  
                        active:scale-95"
                    >
                    <span>My Resume ⬇</span>
                </a>
            </div>
            <div className="md:w-2/5 flex justify-center md:justify-end">
                <div className="relative w-64 h-100">
                    <img 
                        src={niko} 
                        alt="Hero Image"
                        className="rounded-3xl object-cover w-full h-full border-2 border-blue-200 shadow-[0_0_35px_rgba(59,130,246,0.6)]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;