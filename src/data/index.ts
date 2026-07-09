import { 
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiLaravel, SiTailwindcss, 
  SiKotlin, SiMysql, SiReact, SiFigma, SiCanva, SiTypescript, 
  SiNextdotjs, SiNodedotjs, SiExpress, SiPostgresql, SiSupabase, 
  SiExpo, SiPostman, SiGithub
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaWallet } from "react-icons/fa";

import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.jpg';
import projectSkripsi from '../assets/project-skripsi.png'

export const navLinks = [
    { name: "Me", href: "me" },
    { name: "Journey", href: "journey" },
    { name: "Projects", href: "projects" },
    { name: "Tools", href: "tools" },
    { name: "Contact", href: "contact" },
];

export const personal = {
    name: "Nikolas Henrik Owen Chan",
    nickname: "NikoHoc",
    role: [
        "Informatics Graduate @PCU;",
        "Fullstack Developer;",
        "Mobile Developer;",
        "UI / UX Designer;",
        "Retail Trader;"
    ],
    currently: "Actively seeking full-time opportunities & open to collaborations.",
    briefDescription: "Building innovative web and mobile systems to solve real-world business challenges.",
    description: "As a Software Engineer and Informatics graduate from Petra Christian University, I am deeply passionate about translating complex operational bottlenecks into streamlined digital solutions. I thrive on diving into unique problems and building custom web, system, or mobile applications that tackle these challenges head-on. For me, software engineering is more than just writing code; it's about delivering impactful, user-centric tools that make everyday operations more efficient and intuitive. Beyond software development, I am also an active trader and am always thrilled to connect and swap ideas about the market.",
    contact: {
        headline: "Got an Idea? Let's Talk!",
        description: "Open for new opportunities and collaborations. Have a project in mind? Let's build something amazing together!\nP.S. Always open to chat about coding, market conditions, trading, and investing.",
        phone: "+62 812-5702-6600",
        location: "Surabaya, Indonesia"
    },
    socials: {
        gmail: "mailto:niko.owen88@gmail.com",
        email_address: "niko.owen88@gmail.com",
        instagram: "https://www.instagram.com/niko_hoc/",
        linkedin: "https://www.linkedin.com/in/nikohoc/",
        github: "https://www.github.com/nikohoc",
    }
};

export const journey = [
    {
        id: 1,
        yearRange: "Present",
        title: "Software Engineer, Freelance",
        location: "Hybrid Remote",
        description: [
            "Delivering end-to-end software development services, specializing in custom web applications, complex management systems, and cross-platform mobile apps.",
            "Highly adaptable and flexible, readily exploring and mastering new frameworks to meet unique project demands and resolve specific problems.",
            "Preferred Tech Stack: React.js, Next.js, Node.js, Express.js, React Native, Expo."
        ]
    },
    {
        id: 2,
        yearRange: "Sep 2024 - Dec 2024",
        title: "Android Developer, Bangkit Academy",
        location: "Remote",
        description: [
            "Completed an intensive learning path in Android Development using Kotlin.",
            "Collaborated with a cross-university team to manage and deliver a comprehensive Capstone Project.",
            "Honed essential industry soft skills including project management, communication, and adaptability."
        ]
    },
    {
        id: 3,
        yearRange: "Jul 2022 - Sep 2026",
        title: "Informatics Graduate, Petra Christian University",
        location: "Surabaya, Indonesia",
        description: [
            "Graduated with a GPA of 3.54/4.00.",
            "Gained a comprehensive understanding of Computer Science fundamentals, from algorithms, data structures, system design, and building scalable web/mobile applications.",
            "Specializing in Fullstack Web Development and Relational Database Management."
        ]
    },
    {
        id: 4,
        yearRange: "Jul 2019 - May 2022",
        title: "MIPA Student, SMAK Kolese Santo Yusup",
        location: "Malang, Indonesia",
        description: [
            "Majored in Mathematics and Natural Sciences (MIPA), graduating with a solid average of 89.49/100.",
            "Built a strong foundation in analytical thinking and scientific principles for higher education.",
            "Developed independence, discipline, and adaptability through 3 years of dormitory living."
        ]
    },
];

export const projects = [
  {
    id: 1,
    title: "Multi-Branch POS & Mobile Ordering App",
    subtitle: "Final Year Project",
    date: "2026",
    description: "Developed a multi-branch POS web system and a mobile ordering app as my Final Year Project to digitize operations at my family's restaurant. The system features a user-friendly internal staff dashboard paired with an online ordering app that includes an integrated payment gateway. Built using a RESTful API for seamless data communication, the platform is reliably deployed on Hostinger. Impact & Results: Accelerated operational efficiency with 92% faster receipt generation and a 97% reduction in daily reporting time.",
    image: projectSkripsi,
    tools: ["Next.js", "React.js", "Node.js", "Express.js", "React Native", "Expo Go", "Supabase", "Midtrans", "Hostinger"],
    link: "https://github.com/NikoHoc/fyp-frontend-web"
  },
  {
    id: 2,
    title: "Gereja Katolik Gembala Yang Baik Surabaya",
    subtitle: "Client Project",
    date: "2025",
    description: "Official website and admin dashboard for GYB Catholic Church Surabaya, created to help spread church information to the congregation and allow admins to easily update church data.",
    image: project1,
    tools: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    link: "https://parokigyb.or.id/"
  },
  {
    id: 3,
    title: "Nourish - Stunting Application",
    subtitle: "Bangkit Academy Capstone Project",
    date: "2024",
    description: "A Bangkit Academy Capstone Project built by a cross-university team. As the Mobile Developer, I integrated the Android app with Cloud REST APIs and Machine Learning models to effectively detect and monitor stunting levels.",
    image: project2,
    tools: ["Kotlin", "Cloud", "ML Model"],
    link: "https://github.com/Stunting-Detection-App"
  },
  {
    id: 4,
    title: "Easy Kos",
    subtitle: "University Course Project",
    date: "2024",
    description: "A comprehensive boarding house management system for my class final project serving admins, owners, and tenants. Features a seamless payment gateway integration via Midtrans and a modern, responsive UI built with DaisyUI.",
    image: project3,
    tools: ["Laravel", "PHP", "Tailwind CSS", "DaisyUI", "MySQL", "Midtrans"],
    link: "https://github.com/NikoHoc/easy-kos"
  },
  {
    id: 5,
    title: "Mocktify",
    subtitle: "University Course Project",
    date: "2025",
    description: "A fully functional Spotify clone web application for my class final project. Built using Next.js and Supabase, featuring music playback utilizing the official Spotify Web API.",
    image: project4,
    tools: ["Next.js", "Tailwind CSS", "Supabase", "Spotify Web API"],
    link: "https://github.com/NikoHoc/mocktify"
  },
];
export const toolsData = [
  { name: "HTML5", category: "Markup Language", icon: SiHtml5, color: "text-orange-600", isFavorite: false },
  { name: "CSS3", category: "Style Sheet", icon: SiCss3, color: "text-blue-600", isFavorite: false },
  { name: "JavaScript", category: "Programming Language", icon: SiJavascript, color: "text-yellow-400", isFavorite: true },
  { name: "MySQL", category: "Relational Database", icon: SiMysql, color: "text-blue-500", isFavorite: false },
  { name: "PostgreSQL", category: "Relational Database", icon: SiPostgresql, color: "text-blue-400", isFavorite: true },
  { name: "PHP", category: "Programming Language", icon: SiPhp, color: "text-indigo-500", isFavorite: false },
  { name: "Laravel", category: "PHP Framework", icon: SiLaravel, color: "text-red-600", isFavorite: false },
  { name: "GitHub", category: "Version Control", icon: SiGithub, color: "text-gray-800 dark:text-white", isFavorite: true },
  { name: "Tailwind CSS", category: "CSS Framework", icon: SiTailwindcss, color: "text-cyan-400", isFavorite: true },
  { name: "Kotlin", category: "Programming Language", icon: SiKotlin, color: "text-purple-600", isFavorite: false },
  { name: "TypeScript", category: "Programming Language", icon: SiTypescript, color: "text-blue-500", isFavorite: true },
  { name: "React.js", category: "JavaScript Library", icon: SiReact, color: "text-cyan-400", isFavorite: true },
  { name: "Next.js", category: "React Framework", icon: SiNextdotjs, color: "text-black dark:text-white", isFavorite: true },
  { name: "Node.js", category: "JavaScript Runtime", icon: SiNodedotjs, color: "text-green-600", isFavorite: true },
  { name: "Express.js", category: "Node.js Framework", icon: SiExpress, color: "text-gray-400", isFavorite: true },
  { name: "Supabase", category: "Backend-as-a-Service", icon: SiSupabase, color: "text-emerald-500", isFavorite: true },
  { name: "React Native", category: "Mobile Framework", icon: SiReact, color: "text-cyan-400", isFavorite: true },
  { name: "Expo Go", category: "React Native Toolchain", icon: SiExpo, color: "text-black dark:text-white", isFavorite: true },
  { name: "NativeWind", category: "Styling System", icon: SiTailwindcss, color: "text-cyan-400", isFavorite: true },
  { name: "Midtrans", category: "Payment Gateway", icon: FaWallet, color: "text-blue-500", isFavorite: true },
  { name: "Postman", category: "API Platform", icon: SiPostman, color: "text-orange-500", isFavorite: false },
  { name: "VS Code", category: "Code Editor", icon: VscVscode, color: "text-blue-500", isFavorite: true },
  { name: "Figma", category: "Design Tool", icon: SiFigma, color: "text-rose-500", isFavorite: false },
  { name: "Canva", category: "Design Tool", icon: SiCanva, color: "text-teal-400", isFavorite: false },
];