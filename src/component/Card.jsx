import clsx from "clsx";
import { motion } from "framer-motion";

export default function Card({ img, name, link }) {
  return (
    <div>
      <img src={img} alt={name} className="shadow-black shadow-sm" />
      <a href={`https://muhrandy.github.io/${link}`}>
        <motion.h1
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, type: "spring" }}
          className={clsx(
            "text-center text-md font-medium text-secondary py-4 underline",
            ["sm:text-lg", "md:text-xl", "lg:text-2xl"]
          )}
        >
          {name}
        </motion.h1>
      </a>
    </div>
  );
}
