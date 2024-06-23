export default function Hero() {
  return (
    <section className="min-h-dvh md:h-dvh">
      <article className="grid md:grid-cols-2 h-full items-center gap-5 relative">
        <picture className="mt-20 md:mt-0 place-self-center self-end md:items-end md:place-content-end rounded-full md:rounded-none aspect-square md:w-full  md:h-full md:col-start-2 flex items-center overflow-hidden bg-slate-100 md:bg-transparent">
          <source srcSet="picture.webp" type="image/webp" />
          <img
            className="drop-shadow-lg max-h-[90vh] object-top object-cover md:object-contain md:w-fit md:h-fit w-full h-full -scale-x-100"
            src="picture.png"
            alt="main picture"
            loading="eager"
          />
        </picture>

        <div className="md:col-start-1 md:row-start-1 m-0 md:mt-52">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-left">
            Enoc Dominguez
          </h1>
          <h2 className="text-3xl md:text-4xl w-full font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent animate-fade-in-right">
            Front-end Developer
          </h2>
          <p className="mt-5 animate-fade-in-up">
            Hola, soy Enoc, un ingeniero en sistemas especializado en desarrollo web frontend. Me apasiona crear interfaces intuitivas y atractivas utilizando tecnologías como HTML, CSS, JavaScript y React.js. Aquí podrás explorar ejemplos de mis proyectos donde combino habilidades técnicas y creativas para ofrecer experiencias de usuario excepcionales.
          </p>
        </div>

        <div className="dark:brightness-[3.5] hidden md:block bg-shape w-full h-full bg-no-repeat opacity-5 absolute -z-10 bg-right-top"></div>
        <div className="dark:brightness-[3.5] hidden md:block bg-shape w-full h-full bg-no-repeat opacity-5 absolute -z-10 bg-left-bottom -ml-60 mt-60"></div>
      </article>
    </section>
  );
}
