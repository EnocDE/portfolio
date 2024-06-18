import ListSocialMedia from "./ListSocialMedia";

export default function Navbar() {
  return (
    <>
      <nav className="z-10 flex justify-between items-center absolute gap-5 top-0 left-0 right-0 py-5 animate-fade-in-down">
        <h1 className="text-4xl font-bold font-caveat">Enoc Dominguez</h1>
        <ListSocialMedia />
      </nav>
    </>
  );
}
