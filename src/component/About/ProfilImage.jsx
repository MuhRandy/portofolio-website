import clsx from "clsx";
import { motion } from "framer-motion";

const ProfilImage = ({ profil, className }) => {
  return (
    <motion.img
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: "spring" }}
      src={profil}
      alt="Muhammad Randy Profil Photo's"
      className={clsx(
        "border-solid border-[#625959] border",
        "rounded-2xl",
        "w-[50%]",
        [
          "sm:h-[25vh] sm:w-auto",
          "md:h-[28vh] md:w-auto",
          "lg:h-[40vh] lg:w-auto",
        ],
        className
      )}
    />
  );
};

export default ProfilImage;
