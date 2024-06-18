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
    image: "uptask.png",
    description: 'Uptask es un <span class="highlight-text">planificador de proyectos</span> que nos permitirá llevar un control de los usuarios en nuestro equipo de trabajo, las tareas asignadas y sus estados, además, también nos permite llevar un registro de comentarios y actualizaciones de los estados hechos por los miembros del equipo en cada tarea del proyecto.',
    page: '',
    repository: ''
  },
  {
    name: 'Quiosco',
    technologies: ["Next.js", "React.js", "Prisma", "TailwindCSS"],
    image: "quiosco.png",
    description: 'Este sistema es un <span class="highlight-text">quisco de comida</span> que muestra un menú donde el cliente podrá elegir y realizar su pedido de forma interactiva, incluye un sistema para administrar los productos visibles en el menú, cambiar el estado de las ordenes desde la cocina y una pantalla para mostrar los ultimos 5 pedidos listos para recoger.',
    page: '',
    repository: ''
  },
  {
    name: "Calories Tracker",
    technologies: ["TypeScript", "React.js", "Tailwind CSS"],
    image: "tracker.png",
    description: 'Esta app nos permite llevar el <span class="highlight-text">conteo de las calorias</span> consumidas y gastadas durante el dia.',
    page: '',
    repository: ''
  },
  {
    name: 'Real State',
    technologies: ["HTML", "CSS", "SASS"],
    image: "realstate.png",
    description: 'Sitio web para <span class="highlight-text">promocionar la venta</span> de casas e información de la empresa.',
    page: '',
    repository: ''
  },
  {
    name: 'Muebleria',
    technologies: ["HTML", "CSS"],
    image: "muebles.png",
    description: 'Sitio web para mostrar el <span class="highlight-text">catalogo de productos</span> e información</span> de la empresa.',
    page: '',
    repository: ''
  },
  {
    name: 'Nucleus',
    technologies: ["HTML", "CSS"],
    image: "nucleus.png",
    description: '<span class="highlight-text">Landing page</span> para la app de nucleus.',
    page: '',
    repository: ''
  },
  // {
  //   name: 'Cafetería',
  //   technologies: ["HTML", "CSS", "SASS"],
  //   image: "cafeteria.png",
  //   page: '',
  //   repository: ''
  // },
]