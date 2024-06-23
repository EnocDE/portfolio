import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="container-mx relative">
          <Navbar />
          <Hero />
    </header>
  );
}
