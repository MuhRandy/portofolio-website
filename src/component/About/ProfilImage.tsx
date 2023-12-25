import clsx from "clsx";
import { motion } from "framer-motion";

type ProfilImageProps = {
  profil: string;
  className: string;
};

const ProfilImage = ({ profil, className }: ProfilImageProps) => {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 1, type: "spring" }}
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
