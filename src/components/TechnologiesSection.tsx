import { TECHNOLOGIES } from "../data";
import TitleSection from "./TitleSection";

export default function TechnologiesSection () {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <TitleSection>Tecnologías</TitleSection>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-10  content-evenly text-center h-full flex-1">
        {TECHNOLOGIES.map((tech) => (
          <li key={tech.tag} className='w-full last:col-start-1 last:col-end-3 md:last:col-start-[unset] md:last:col-end-[unset] flex flex-col md:flex-row-reverse items-center gap-3 border-2 border-[#242424] cartoon-shadow dark:shadow-neutral-300 dark:border-neutral-300 transition-all px-5 md:px-5 py-5 rounded-lg active:scale-95'>
            {tech.icon}
            <h3 className='font-bold sm:text-xl lg:text-2xl xl:text-4xl'>
              {tech.tag}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
