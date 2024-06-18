import Header from "./components/Header";
import MenuSocialMedia from "./components/MenuSocialMedia";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import TechnologiesSection from "./components/TechnologiesSection";

function App() {
  return (
    <>
      <Header />

      <main className="relative">
        <div className="container-mx h-full min-h-screen">
          <TechnologiesSection />
          <ProjectsSection />
        </div>
      </main>

      <footer className="relative container-mx bg-teal-300 w-full">
            <Navbar />
          </footer>
      <MenuSocialMedia />
    </>
  );
}

export default App;
