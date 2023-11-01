import clsx from "clsx";
import { motion } from "framer-motion";

const AboutProfil = ({ profil, className }) => {
  return (
    <motion.img
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: "spring" }}
      src={profil}
      alt="Muhammad Randy Profil Photo's"
      className={clsx(
        "border-solid border-[#625959] w-[30vw] border-[1px] rounded-2xl z-10 mt-10",
        ["sm:w-[18vw]", "lg:w-[15vw]"],
        className
      )}
    />
  );
};

export default AboutProfil;
