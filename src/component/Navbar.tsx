import { motion } from "framer-motion";
import { IconMenu2 } from "@tabler/icons-react";
import { IconSun, IconMoon, IconCode } from "@tabler/icons-react";
import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-scroll";
import DrawerMenu from "./Navbar/DrawerMenu";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Navbar() {
  const { isAuth, navigate, setIsAuth } = useContext(AppContext);

  const navs = [
    {
      name: "Home",
      link: "about",
      offset: -50,
    },
    {
      name: "Projects",
      link: "project",
      offset: -50,
    },
    {
      name: "Contact",
      link: "contact",
      offset: -50,
    },
  ];
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <>
      <nav
        className={clsx(
          "bg-white/10 font-inter w-screen h-14",
          "fixed top-0 left-0 right-0 z-10",
          "flex items-center justify-between",
          "backdrop-blur-sm shadow-sm",
          ["dark:bg-black/30", "dark:text-white"]
        )}
      >
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
                  "text-sm",
                  ["dark:border-white"]
                )}
                onClick={() => setDarkMode(!darkMode)}
              >
                <IconMoon size={15} />
                <IconSun size={15} />
                <div
                  className={clsx(
                    "rounded-full bg-black w-5 h-5",
                    "absolute top-[1px]",
                    "dark:bg-white",
                    !darkMode ? "left-[2px]" : "right-[2px]"
                  )}
                ></div>
              </div>
            </li>
            {/*  */}
            <li className="sm:hidden">
              <IconMenu2 onClick={() => setIsMenuClicked(true)} />
            </li>
            {navs.map((nav, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring" }}
                key={index}
                className="hidden sm:block"
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
            {isAuth && (
              <li>
                <button onClick={signUserOut} className="hidden sm:block">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <DrawerMenu
        isMenuClicked={isMenuClicked}
        setIsMenuClicked={setIsMenuClicked}
        navs={navs}
        signUserOut={signUserOut}
      />
    </>
  );
}
