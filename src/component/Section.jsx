import clsx from "clsx";
import { cn } from "./utils";
import { motion } from "framer-motion";

const Section = ({ children, className, id }) => {
  return (
    <section
      className={clsx(
        "min-h-screen",
        "py-10",
        "flex justify-center items-center"
      )}
      id={id}
    >
      <div className={cn("w-[80%]", className)}>{children}</div>
    </section>
  );
};

const Title = ({ className, children }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, bottom: "-20px" }}
      whileInView={{ opacity: 1, bottom: "0px" }}
      transition={{ duration: 2, type: "spring" }}
      className={cn(
        "text-lg leading-4 font-bold text-center font-inter",
        "relative",
        [
          "sm:text-2xl sm:leading-5",
          "md:text-3xl md:leading-6",
          "lg:text-5xl lg:leading-10",
        ],
        className
      )}
    >
      {children}
    </motion.h1>
  );
};

Section.Title = Title;

export default Section;
