import clsx from "clsx";
import { motion } from "framer-motion";

const AboutDescription = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, bottom: "-20px" }}
        whileInView={{ opacity: 1, bottom: "0px" }}
        transition={{ duration: 2, type: "spring" }}
        className="flex flex-col leading-3 relative"
      >
        <span
          className={clsx("text-md font-bold", [
            "sm:text-xl sm:leading-3",
            "md:text-3xl md:leading-4",
            "lg:text-4xl lg:leading-5",
          ])}
        >
          Muhammad
        </span>
        <span
          className={clsx("text-lg font-bold", [
            "sm:text-2xl",
            "md:text-4xl",
            "lg:text-5xl",
          ])}
        >
          Randy
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, bottom: "-20px" }}
        whileInView={{ opacity: 1, bottom: "0px" }}
        transition={{ duration: 2, type: "spring" }}
        className={clsx("text-sm text-justify relative", [
          "sm:w-[40vw] sm:text-lg",
          "md:text-xl",
          "lg:text-2xl lg:w-[30vw]",
        ])}
      >
        A beginner software developer from Indonesia who focus on frontend
        website developer.
      </motion.div>
    </>
  );
};

export default AboutDescription;
