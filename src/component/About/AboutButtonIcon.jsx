import clsx from "clsx";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { motion } from "framer-motion";

const AboutButtonIcon = () => {
  const socialMedia = [
    { icon: <AiFillGithub />, link: "#" },
    { icon: <AiFillTwitterCircle />, link: "#" },
    { icon: <AiFillLinkedin />, link: "#" },
  ];

  return (
    <>
      <div className="flex items-center justify-center sm:justify-between">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, type: "spring" }}
          className={clsx("bg-black text-white rounded p-1 mt-2 text-md", [
            "sm:text-sm sm:px-3 sm:mt-0",
            "lg:text-lg",
          ])}
        >
          Download CV
        </motion.button>
        <div
          className={clsx("text-2xl hidden", [
            "sm:text-3xl sm:flex sm:gap-2",
            "lg:text-4xl",
          ])}
        >
          {socialMedia.map((socialMedia, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "spring" }}
              whileTap={{ scale: 0.9 }}
              className={clsx("cursor-pointer")}
            >
              {socialMedia.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutButtonIcon;
