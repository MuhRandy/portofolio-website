import { IconCode } from "@tabler/icons";
import { Link } from "react-scroll";

export default function Navbar() {
  const navs = [
    {
      name: "Home",
      link: "About",
    },
    {
      name: "Projects",
      link: "Works",
    },
    {
      name: "Contact",
      link: "Contact",
    },
  ];
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white flex items-center justify-between font-inter z-20">
      <div className="flex items-center text-2xl gap-1">
        <IconCode size={"1.875rem"} />
        <span>Randy Portofolio's</span>
      </div>
      <div>
        <ul className="flex gap-2 text-xl px-10">
          {navs.map((nav, index) => (
            <Link
              to={nav.link}
              activeClass="font-bold"
              spy={true}
              smooth={true}
              key={index}
            >
              <li className="cursor-pointer">{nav.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
