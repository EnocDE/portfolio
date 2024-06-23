import { PROJECTS } from "../data";
import Project from "./Project";
import TitleSection from "./TitleSection";

export default function ProjectsSection() {
  return (
    <section className="min-h-screen mt-2">
      <TitleSection>Proyectos</TitleSection>
      <section className="grid lg:grid-cols-2 gap-16 md:mt-16 mb-10">
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
      </section>
    </section>
  );
}
