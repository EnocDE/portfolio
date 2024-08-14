import { SiTypescript } from "react-icons/si";
import { FaHtml5, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiSass } from "react-icons/si";
import { FaGithub, FaReact } from "react-icons/fa";

export const LINKS = [
  {
    tag: "Home",
    href: "#",
  },
  {
    tag: "About",
    href: "#",
  },
  {
    tag: "Projects",
    href: "#",
  },
];

export const SOCIAL_MEDIA = [
  {
    tag: "Github",
    href: "https://github.com/EnocDE",
    icon: <FaGithub size={35} />,
  },
  {
    tag: "Linked In",
    href: "https://www.linkedin.com/in/enocde-v/",
    icon: <FaLinkedin size={35} />,
  },
  {
    tag: "Instagram",
    href: "https://www.instagram.com/edmz_",
    icon: <FaInstagram size={35} />,
  },
];

export const TECHNOLOGIES = [
  {
    tag: "HMTL",
    icon: <FaHtml5 size={100} className="text-neutral-800 w-full dark:text-white"/>,
  },
  {
    tag: "CSS",
    icon: <FaCss3Alt size={100} className="text-neutral-800 w-full dark:text-white"/>,
  },
  {
    tag: "JavaScript",
    icon: <IoLogoJavascript size={100} className="text-neutral-800 w-full dark:text-white"/>,
  },
  {
    tag: "TypeScript",
    icon: <SiTypescript size={100} className="text-neutral-800 w-full dark:text-white"/>,
  },
  {
    tag: "Tailwind",
    icon: <RiTailwindCssFill size={100} className="text-neutral-800 w-full dark:text-white"/>,
  },
  {
    tag: "SASS",
    icon: <SiSass size={100} className="text-neutral-800 w-full dark:text-white"/>,
  },
  {
    tag: "Github",
    icon: <FaGithub size={100} className="text-neutral-800 w-full dark:text-white"/>,
  },
  {
    tag: "React",
    icon: <FaReact size={100} className="text-neutral-800 w-full dark:text-white"/>,
  },
  {
    tag: "Next.js",
    icon: <RiNextjsFill size={100} className="text-neutral-800 w-full dark:text-white"/>,
  },
];

export const PROJECTS = [
  {
    name: 'Uptask',
    technologies: ["MongoDb", "Express", "React.js", "Node.js", "TypeScript", "Tailwind CSS"],
    image: "uptask",
    description: 'Uptask es una aplicación de <span class="highlight-text">gestión de proyectos</span> que facilita el seguimiento de usuarios dentro de nuestro equipo de trabajo, así como de las tareas asignadas y sus respectivos estados. Además, permite el registro de comentarios y actualizaciones sobre el progreso de cada tarea realizadas por los miembros del equipo en el proyecto.',
    page: 'https://uptask-frontend-one.vercel.app/auth/login',
    repository: 'https://github.com/EnocDE/uptask_frontend'
  },
  {
    name: 'Quiosco',
    technologies: ["Next.js", "React.js", "Prisma", "TailwindCSS"],
    image: "quiosco",
    description: 'Este sistema es un <span class="highlight-text">quiosco de comida</span> que presenta un menú interactivo para que los clientes elijan y realicen sus pedidos. Incluye funcionalidades para administrar los productos mostrados en el menú, actualizar el estado de las órdenes desde la cocina, y una pantalla que muestra los últimos 5 pedidos listos para ser recogidos.',
    page: 'https://quisco-next-app.vercel.app/order/cafe',
    repository: 'https://github.com/EnocDE/quisco-next'
  },
  {
    name: "SaaS Landing Page",
    technologies: ["TypeScript", "React.js", "Next.JS", "Tailwind CSS", "Framer Motion"],
    image: "saas",
    description: 'Landing page desarrollada para <span class="highlight-text">promocionar un SaaS</span>.',
    page: 'https://landing-page-saas-parallax.vercel.app/',
    repository: 'https://github.com/EnocDE/landing-page-parallax'
  },
  {
    name: "Calories Tracker",
    technologies: ["TypeScript", "React.js", "Tailwind CSS"],
    image: "tracker",
    description: 'Esta aplicación proporciona la funcionalidad necesaria para llevar un detallado <span class="highlight-text">registro de las calorías</span> consumidas y las calorías gastadas a lo largo del día, permitiendo a los usuarios mantener un seguimiento preciso de su ingesta calórica y del gasto energético diario.',
    page: 'https://enocde-calorie-tracker.netlify.app/',
    repository: 'https://github.com/EnocDE/Calorie-Tracker'
  },
  {
    name: 'Real State',
    technologies: ["HTML", "CSS", "SASS"],
    image: "realstate",
    description: 'Un sitio web destinado a la <span class="highlight-text">promoción de la venta de casas</span>, con información sobre la empresa y las propiedades en venta, que incluye un blog con entradas de interés.',
    page: 'https://enocde-real-state.netlify.app/',
    repository: 'https://github.com/EnocDE/real-state'
  },
  {
    name: 'Muebleria',
    technologies: ["HTML", "CSS"],
    image: "muebles",
    description: 'Un sitio web dedicado a presentar de manera integral el <span class="highlight-text">catálogo de productos</span> ofrecidos por la empresa, acompañado de información detallada sus nuestros servicios y valores corporativos.',
    page: 'https://enocde-muebleria.netlify.app/',
    repository: 'https://github.com/EnocDE/Ecommerce-muebleria'
  },
  // {
  //   name: 'Nucleus',
  //   technologies: ["HTML", "CSS"],
  //   image: "nucleus",
  //   description: '<span class="highlight-text">Landing page</span> diseñada exclusivamente para la aplicación Nucleus, ofreciendo una experiencia informativa completa y atractiva.',
  //   page: 'https://enocde-nucleus.netlify.app/',
  //   repository: 'https://github.com/EnocDE/nucleus-ewallet'
  // },
  // {
  //   name: 'Cafetería',
  //   technologies: ["HTML", "CSS", "SASS"],
  //   image: "cafeteria",
  //   page: '',
  //   repository: ''
  // },
]