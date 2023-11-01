import profil from "../assets/profil.jpg";
import blob from "../assets/blob.svg";
import blob2 from "../assets/blob2.svg";
import clsx from "clsx";
import AboutDescription from "../component/AboutDescription";
import AboutButtonIcon from "../component/AboutButtonIcon";
import AboutProfil from "../component/AboutProfil";

export default function About() {
  return (
    <section
      id="About"
      className={clsx(
        "flex flex-col items-center gap-3",
        "overflow-clip font-inter",
        "mx-[20vw] my-10",
        "sm:flex-row sm:mx-[18vw] sm:justify-between sm:h-[50vh]"
      )}
    >
      <AboutProfil profil={profil} className={"sm:hidden"} />
      <div className="flex flex-col gap-1">
        <AboutDescription />
        <AboutButtonIcon />
      </div>
      <AboutProfil profil={profil} className={"hidden sm:inline-block"} />
      <div className="absolute w-[600px] right-0 bottom-[-325px] z-[0] hidden">
        <img src={blob} alt="blob" />
        <img src={blob2} alt="blob2" />
      </div>
    </section>
  );
}
