import clsx from "clsx";
import { Link } from "react-scroll";
import { IconX } from "@tabler/icons";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../App";

const DrawerMenu = ({ isMenuClicked, setIsMenuClicked, navs, signUserOut }) => {
  const { isAuth } = useContext(AppContext);
  return (
    <div
      className={clsx("bg-black/25 w-screen h-screen fixed z-20", {
        hidden: !isMenuClicked,
      })}
      onClick={() => setIsMenuClicked(false)}
    >
      <motion.div
        className="bg-white w-64 h-screen relative"
        initial={{ left: "-200px" }}
        whileInView={{ left: "0px" }}
        transition={{ duration: 0.2, type: "tween" }}
      >
        <IconX className="absolute right-1 top-1" />
        <div className="text-3xl text-center py-4">Menu</div>
        <ul className={clsx("text-md", "md:text-lg")}>
          {navs.map((nav, index) => (
            <Link
              key={index}
              to={nav.link}
              activeClass="font-bold"
              spy={true}
              offset={nav.offset}
              smooth={true}
            >
              <li
                className="cursor-pointer text-xl text-center py-4"
                onClick={() => setIsMenuClicked(false)}
              >
                {nav.name}
              </li>
              <hr />
            </Link>
          ))}
          {isAuth && (
            <>
              <li className="flex justify-center">
                <button
                  onClick={signUserOut}
                  className="cursor-pointer text-xl text-center py-4"
                >
                  Logout
                </button>
              </li>
              <hr />
            </>
          )}
        </ul>
      </motion.div>
    </div>
  );
};

export default DrawerMenu;
