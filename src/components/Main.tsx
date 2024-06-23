import ProjectsSection from "./ProjectsSection";
import TechnologiesSection from "./TechnologiesSection";

export default function Main() {
  return (
    <main className="relative container-mx h-full min-h-screen">
      <TechnologiesSection />
      <ProjectsSection />
    </main>
  );
}
