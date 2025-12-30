import { Mail } from "lucide-react";
import { personal } from "../data/index"; 

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col items-center justify-between gap-10 py-10 md:py-0 mb-20">
            <div className="flex flex-col items-center mb-12">
                <h1 className="font-poppins font-bold text-4xl text-white mb-4">
                    Contact
                </h1>
                <div className="h-0.5 w-24 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] rounded-full"></div>
            </div>
            <div className="bg-neutral-900 border border-white rounded-2xl p-8 md:p-10 max-w-4xl w-full text-center flex flex-col gap-6 shadow-[0_0_35px_rgba(59,130,246,0.6)]">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-500">
                    {personal.contact.headline}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                    {personal.contact.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                    <a 
                        href={personal.socials.gmail} 
                        className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-transform hover:scale-105"
                    >
                        <Mail size={20} />
                        Email Me
                    </a>
                </div>
            </div>
        </section>        
    )
}

export default Contact;