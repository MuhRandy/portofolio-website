import profil from "../assets/profil.jpg";
import clsx from "clsx";
import AboutDescription from "../component/About/AboutDescription";
import AboutButtonIcon from "../component/About/AboutButtonIcon";
import ProfilImage from "../component/About/ProfilImage";
import Section from "../component/Section";

export default function About() {
  return (
    <Section
      className={clsx(
        "font-inter w-[80%]",
        "flex flex-col justify-center items-center gap-5",
        "sm:flex-row"
      )}
      id="about"
    >
      <ProfilImage profil={profil} className={"sm:hidden"} />
      <div
        className={clsx("flex flex-col justify-between", "", [
          "sm:h-[20vh]",
          "md:h-[23vh]",
          "lg:h-[35vh]",
        ])}
      >
        <AboutDescription />
        <AboutButtonIcon />
      </div>
      <ProfilImage profil={profil} className={"hidden sm:inline-block"} />
    </Section>
  );
}
