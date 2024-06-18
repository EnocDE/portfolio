interface Props {
  name: string;
  technologies: string[];
  image: string;
  description: string;
  page: string;
  repository: string;
}

export default function Project({
  name,
  technologies,
  image,
  description,
  page,
  repository,
}: Props) {
  return (
    <div className="space-y-3 rounded-2xl flex flex-col">
      <div className="relative group rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform ease-in-out w-full">
        <img className="group-hover:blur-sm" src={image} alt="Proyecto" />
        <div className="absolute inset-0 grid place-items-center place-content-center p-5 bg-transparent-black opacity-0 group-hover:opacity-100 transition-all group">
          <p
            className="text-sm sm:text-lg text-white font-light text-justify select-none w-full translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 transition-all "
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>

      <h3 className="text-2xl font-bold dark:text-white">{name}</h3>

      <ul className="flex gap-3 flex-wrap">
        {technologies.map((tech) => (
          <li key={tech} className="text-lg font-semibold text-gray-400 dark:text-neutral-400">
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex gap-10 justify-center flex-1 items-end">
        <a
          className="shadow-animated px-3 py-2 border-2 border-[#242424] hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-animated-reverse transition-all rounded-lg dark:shadow-neutral-200 dark:border-neutral-200 font-semibold"
          href={page}
        >
          Ver Proyecto
        </a>
        <a
          className="shadow-animated px-3 py-2 border-2 border-[#242424] hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-animated-reverse transition-all rounded-lg dark:shadow-neutral-200 dark:border-neutral-200 font-semibold"
          href={repository}
        >
          Ver Repositorio
        </a>
      </div>
    </div>
  );
}
