import clsx from "clsx";
import { motion } from "framer-motion";

const AboutDescription = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, bottom: "-20px" }}
        whileInView={{ opacity: 1, bottom: "0px" }}
        transition={{ duration: 2, type: "spring" }}
        className={clsx("flex justify-center relative font-bold text-2xl", [
          "sm:flex-col",
        ])}
      >
        <span
          className={clsx("mr-1", [
            "sm:text-xl sm:leading-3",
            "md:text-3xl md:leading-4",
            "lg:text-4xl lg:leading-5",
          ])}
        >
          Muhammad
        </span>
        <span className={clsx(["sm:text-2xl", "md:text-4xl", "lg:text-5xl"])}>
          Randy
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, bottom: "-20px" }}
        whileInView={{ opacity: 1, bottom: "0px" }}
        transition={{ duration: 2, type: "spring" }}
        className={clsx("text-lg relative text-center", [
          "sm:w-[40vw] sm:text-justify",
          "md:text-xl",
          "lg:text-2xl lg:w-[35vw]",
        ])}
      >
        A beginner software developer from Indonesia who enthusiast to become
        website developer.
      </motion.div>
    </>
  );
};

export default AboutDescription;
