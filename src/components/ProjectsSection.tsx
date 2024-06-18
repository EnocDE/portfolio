import { PROJECTS } from "../data";
import Project from "./Project";

export default function ProjectsSection() {
  return (
    <section className="min-h-screen">
      <h2 className="text-6xl font-bold text-center pt-10 pb-20">Proyectos</h2>
      <div className="grid lg:grid-cols-2 gap-10 my-10">
        {PROJECTS.map((project) => {
          const { name, image, description, page, technologies, repository } =
            project;
          return (
            <Project
              key={name}
              name={name}
              image={image}
              description={description}
              page={page}
              technologies={technologies}
              repository={repository}
            />
          );
        })}
      </div>
    </section>
  );
}
