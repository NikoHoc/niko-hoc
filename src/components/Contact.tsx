import { Mail } from "lucide-react";
import { personal } from "../data/index"; 

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col items-center justify-between gap-10 py-10 md:py-0 mb-20">
            <div className="border-b-2 pb-2">
                <h1 className="font-poppins font-bold text-4xl text-white">Contact</h1>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10 max-w-4xl w-full text-center flex flex-col gap-6 shadow-2xl">
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

                {/* <a 
                    href={personal.socials.linkedin}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition-transform hover:scale-105"
                >
                    LinkedIn
                </a> 
                */}
            </div>

        </div>
        </section>        
    )
}

export default Contact;