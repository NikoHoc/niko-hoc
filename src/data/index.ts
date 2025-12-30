import { 
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiLaravel, 
  SiKotlin, SiMysql, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiPostgresql, SiFigma, SiCanva
} from "react-icons/si";

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
        title: "Senior High School, SMAK Kolese Santo Yusup Malang",
        location: "Malang, Indonesia",
        description: [
            "Majoring in science and mathematics.", 
            "Graduated with grade 89.49/100.",
        ]
    },
    {
        id: 2,
        yearRange: "2019 - 2022",
        title: "University, Petra Christian University",
        location: "Surabaya, Indonesia",
        description: [
            "Majoring in Informatics, currently in 3rd year with 3.54 GPA.", 
            "Learned programming basics, data structures, algorithms, web development, and databases.",
        ]
    },
    {
        id: 3,
        yearRange: "September 2024 - December 2024",
        title: "Adroid Developer, Bangkit Academy",
        location: "Remote",
        description: [
            "Learned Android Development using Android Studio and Kotlin.",
            "Learned soft skills needed for the working industries through ILT sessions.",
            "Collabed with students from different university for capstone project.",
        ]
    }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Web",
    desc: "Aplikasi jual beli dengan fitur payment gateway.",
    image: "/path/to/image.png",
    tools: ["React", "NodeJS", "MongoDB"],
  },
];


export const toolsData = {
  used: [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "PHP", icon: SiPhp, color: "text-purple-700" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
    { name: "Kotlin", icon: SiKotlin, color: "text-purple-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Figma", icon: SiFigma, color: "text-pink-500" },
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