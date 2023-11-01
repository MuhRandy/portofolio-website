import clsx from "clsx";

const AboutProfil = ({ profil, className }) => {
  return (
    <img
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
