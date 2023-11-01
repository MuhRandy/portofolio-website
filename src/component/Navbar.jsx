import { IconCode } from "@tabler/icons";
import clsx from "clsx";
import { Link } from "react-scroll";

export default function Navbar() {
  const navs = [
    {
      name: "Home",
      link: "About",
      offset: -50,
    },
    {
      name: "Projects",
      link: "Works",
      offset: -50,
    },
    {
      name: "Contact",
      link: "Contact",
      offset: -50,
    },
  ];
  return (
    <nav className="sticky top-0 left-0 right-0 bg-white flex items-center justify-between font-inter z-20">
      <div
        className={clsx("text-sm", "flex items-center gap-1", [
          "sm:text-lg sm:font-bold",
          "md:text-2xl",
        ])}
      >
        <IconCode />
        <span>Randy Portofolio's</span>
      </div>
      <div>
        <ul className={clsx("text-md pr-5", "flex gap-2", "md:text-lg")}>
          {navs.map((nav, index) => (
            <Link
              to={nav.link}
              activeClass="font-bold"
              spy={true}
              offset={nav.offset}
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
