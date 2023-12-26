import { IconBrandReact } from "@tabler/icons-react";
import { IconBrandFramer } from "@tabler/icons-react";
import { IconBrandTailwind } from "@tabler/icons-react";
import clsx from "clsx";
import { motion } from "framer-motion";

type CardProps = {
  img: string;
  name: string;
  link: string;
  desc: string;
};

const Card = ({ img, name, link, desc }: CardProps) => {
  return (
    <a href={`https://muhrandy.github.io/${link}`}>
      <motion.div
        initial={{ left: "-100px" }}
        whileInView={{ left: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="shadow-sm border rounded-lg overflow-hidden relative h-full"
      >
        <div className="mx-2 mt-2 rounded-md overflow-hidden">
          <img src={img} alt={name} className="shadow-black shadow-sm" />
        </div>
        <div className="py-4 mb-2 px-2">
          <h1
            className={clsx("text-center text-md font-medium", [
              "sm:text-lg",
              "md:text-xl",
            ])}
          >
            {name}
          </h1>
          <p className="text-center text-slate-600 text-sm dark:text-slate-200">
            {desc}
          </p>
        </div>
        <div className="flex absolute bottom-0 right-0">
          <IconBrandTailwind className="text-blue-500" stroke={1} />
          <IconBrandReact className="text-blue-800" stroke={1} />
          <IconBrandFramer stroke={1} />
        </div>
      </motion.div>
    </a>
  );
};

export default Card;
