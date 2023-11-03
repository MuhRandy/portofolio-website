import { IconSun, IconMoon, IconCode } from "@tabler/icons";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
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
  const [darkMode, setDarkMode] = useState(false);

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
          {/* Toggle darkmode */}
          <li>
            <div
              className={clsx(
                "flex justify-between",
                "border-2 border-black rounded-2xl relative p-1 px-2 cursor-pointer",
                "text-sm"
              )}
              onClick={() => setDarkMode(!darkMode)}
            >
              <IconMoon size={15} />
              <IconSun size={15} />
              <div
                className={clsx(
                  "rounded-full absolute bg-black w-5 h-5 top-[1px]",
                  darkMode ? "left-[2px]" : "right-[2px]"
                )}
              ></div>
            </div>
          </li>
          {/*  */}
          {navs.map((nav, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, type: "spring" }}
              key={index}
            >
              <Link
                to={nav.link}
                activeClass="font-bold"
                spy={true}
                offset={nav.offset}
                smooth={true}
              >
                <li className="cursor-pointer">{nav.name}</li>
              </Link>
            </motion.div>
          ))}
        </ul>
      </div>
    </nav>
  );
}
