import clsx from "clsx";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const AboutButtonIcon = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <button
          className={clsx("bg-black text-white rounded p-1 text-xs", [
            "sm:text-sm sm:px-3",
            "lg:text-lg",
          ])}
        >
          Download CV
        </button>
        <div
          className={clsx("flex text-2xl gap-2", [
            "sm:text-3xl",
            "lg:text-4xl",
          ])}
        >
          <AiFillGithub />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
        </div>
      </div>
    </>
  );
};

export default AboutButtonIcon;
