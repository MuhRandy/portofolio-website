import { IconCode } from "@tabler/icons";

export default function Navbar() {
  const nav = ["About", "Work", "Contact"];
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white flex items-center justify-between font-inter z-20">
      <div className="flex items-center text-2xl font-bold">
        <IconCode size={"1.875rem"} />
        <span>Randy Portofolio's</span>
      </div>
      <div>
        <ul className="flex gap-2 text-xl px-10">
          <a href="#About">
            <li>Home</li>
          </a>
          <a href="#Works">
            <li>Projects</li>
          </a>
          <a href="#Contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
