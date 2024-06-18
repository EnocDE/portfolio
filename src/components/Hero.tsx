import me from "../assets/picture.png";

export default function Hero() {
  return (
    <section className="h-screen">
      <div className="grid md:grid-cols-2 h-full items-center md:gap-5 relative">
        <div className="mt-10 md:mt-0 place-self-center self-end md:items-end md:place-content-end rounded-full md:rounded-none aspect-square md:w-full md:h-full max-h-dvh md:col-start-2 flex items-center overflow-hidden bg-gradient-to-r bg-slate-100 md:bg-transparent">
          <img
            className="drop-shadow-lg object-cover max-h-[92vh] r md:object-contain object-top md:w-fit md:h-fit w-full h-full -scale-x-100"
            src={me}
            alt="main picture"
          />
        </div>
        <div className="md:col-start-1 md:row-start-1 m-0 md:mt-52">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in-left">
            Enoc Dominguez
          </h1>
          <h2 className="text-3xl md:text-4xl w-full font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent animate-fade-in-right">
            Frontend Developer
          </h2>
          <p className="mt-5 animate-fade-in-up">
          Hola! Soy un ingeniero en sistemas enfocado en el desarrollo web frontend, especializado en crear interfaces intuitivas y atractivas utilizando algunas tecnologías como HTML, CSS, JavaScript y React.js. Aquí encontrarás ejemplos de mis proyectos donde combino habilidades técnicas y creativas para ofrecer experiencias de usuario excepcionales.
          </p>
        </div>
        
        <div className="dark:brightness-[3.5] hidden md:block bg-shape w-full h-full bg-no-repeat opacity-5 absolute -z-10 bg-right-top"></div>
        <div className="dark:brightness-[3.5] hidden md:block bg-shape w-full h-full bg-no-repeat opacity-5 absolute -z-10 bg-left-bottom -ml-60 mt-60"></div>
      </div>
    </section>
  );
}
