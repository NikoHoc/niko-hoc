import { 
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiLaravel, 
  SiKotlin, SiMysql, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiPostgresql, SiFigma, SiCanva, SiTailwindcss
} from "react-icons/si";

import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.jpg';

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
        "Informatics Student @PCU;",
        "UI / UX Designer;",
        "Fullstack Developer;",
        "Retail Trader;"
    ],
    currently: "Currently working on my final project!",
    description: "Hello! I'm Nikolas Henrik Owen Chan, people call me NikoHoc. I'm an informatics student at Petra Christian University, passionate about UI/UX design and fullstack development. I love creating user-friendly digital experiences and writing clean, efficient code. I also trade Crypto or Indonesian Stocks!",
    contact: {
        headline: "Got an Idea? Let's Talk!",
        description: "I am currently open for collaboration and new opportunities. If you are looking for a developer to bring your ideas to life, let's connect and build something amazing together! P.S. I’m also up for a coffee chat if you want to discuss about the current market condition, and trading / invesment strategy."
    },
    socials: {
        gmail: "mailto:niko.owen88@gmail.com",
        instagram: "https://www.instagram.com/niko_hoc/",
        linkedin: "https://www.linkedin.com/in/nikohoc/",
        github: "https://www.github.com/nikohoc",
    }
};

export const journey = [
    {
        id: 1,
        yearRange: "2019 - 2022",
        title: "Senior High School, SMAK Kolese Santo Yusup",
        location: "Malang, Indonesia",
        description: [
            "Majored in Mathematics and Natural Sciences (MIPA), graduating with a solid average of 89.49/100.",
            "Built a strong foundation in analytical thinking and scientific principles for higher education.",
            "Developed independence, discipline, and adaptability through 3 years of dormitory living."
        ]
    },
    {
        id: 2,
        yearRange: "2019 - 2022",
        title: "University, Petra Christian University",
        location: "Surabaya, Indonesia",
        description: [
            "Informatics Student (3rd Year) with a current GPA of 3.54/4.00.",
            "Gained a comprehensive understanding of Computer Science fundamentals, from algorithms, data structures, system design, and building project such as web apps or application.",
            "Specializing in Fullstack Web Development (building scalable web apps) and Database Management."
        ]
    },
    {
        id: 3,
        yearRange: "September 2024 - December 2024",
        title: "Adroid Developer, Bangkit Academy",
        location: "Remote",
        description: [
            "Completed an intensive learning path in Android Development using Kotlin.",
            "Collaborated with a cross-university team to manage and deliver a comprehensive Capstone Project.",
            "Honed essential industry soft skills including project management, communication, and adaptability."
        ]
    }
];

export const projects = [
  {
    id: 1,
    title: "Gereja Katolik Gembala Yang Baik Surabaya",
    desc: "Official website for GYB Catholic Church Surabaya, created to help spread church information to people.",
    image: project1,
    tools: ["Laravel", "PHP", "Tailwind CSS", "MySql"],
    link: "https://parokigyb.or.id/"
  },
  {
    id: 2,
    title: "Nourish - Stunting Application",
    desc: "A Bangkit Academy Capstone Project built by a cross-university team. As the Mobile Developer, I integrated the Android app with Cloud REST APIs and Machine Learning models to effectively detect and monitor stunting levels.",
    image: project2,
    tools: ["Kotlin", "Cloud", "ML Model"],
    link: "https://github.com/Stunting-Detection-App"
  },
    {
    id: 3,
    title: "Easy Kos",
    desc: "A comprehensive boarding house management system for my class final project serving admins, owners, and tenants. Features a seamless payment gateway integration via Midtrans and a modern, responsive UI built with DaisyUI.",
    image: project3,
    tools: ["Laravel", "PHP", "Tailwind CSS", "DaisyUI", "MySql", "Midtrans"],
    link: "https://github.com/NikoHoc/easy-kos"
  },
    {
    id: 4,
    title: "Mocktify",
    desc: "A fully functional Spotify clone web application for my class final project. Build using Next.js and Supabase, featuring music playback using the official Spotify Web API.",
    image: project4,
    tools: ["Next Js", "Tailwind CSS", "Supabase", "Spotify Web API"],
    link: "https://github.com/NikoHoc/mocktify"
  },
];

export const toolsData = {
  used: [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-500" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Kotlin", icon: SiKotlin, color: "text-purple-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Figma", icon: SiFigma, color: "text-rose-500" }, 
    { name: "Canva", icon: SiCanva, color: "text-teal-400" },
  ],
  learning: [
    { name: "React", icon: SiReact, color: "text-cyan-400" }, 
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Express", icon: SiExpress, color: "text-gray-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "React Native", icon: SiReact, color: "text-cyan-400" }
  ]
};