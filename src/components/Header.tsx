import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
        <div className="container-mx relative">
          <Navbar />
          <Hero />
        </div>
    </header>
  );
}
