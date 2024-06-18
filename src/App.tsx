import React from "react";

const Header = React.lazy( () => import("./components/Header"))
const MenuSocialMedia = React.lazy( () => import("./components/MenuSocialMedia"))
const Navbar = React.lazy( () => import("./components/Navbar"))
const ProjectsSection = React.lazy( () => import("./components/ProjectsSection"))
const TechnologiesSection = React.lazy( () => import("./components/TechnologiesSection"))

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
