import clsx from "clsx";
import { motion } from "framer-motion";

export default function Card({ img, name, link }) {
  return (
    <div className="shadow-sm border rounded-lg overflow-hidden">
      <div className="mx-5 mt-5">
        <img src={img} alt={name} className="shadow-black shadow-sm" />
      </div>
      <a href={`https://muhrandy.github.io/${link}`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="py-4"
        >
          <h1
            className={clsx("text-center text-md font-medium underline", [
              "sm:text-lg",
              "md:text-xl",
              "lg:text-2xl",
            ])}
          >
            {name}
          </h1>
          <p className="text-center text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio?
          </p>
        </motion.div>
      </a>
    </div>
  );
}
