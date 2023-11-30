import profil from "../assets/profil.jpg";
import clsx from "clsx";
import AboutDescription from "../component/AboutDescription";
import AboutButtonIcon from "../component/AboutButtonIcon";
import AboutProfil from "../component/AboutProfil";

export default function About() {
  return (
    <div className="relative min-h-[100dvh]">
      <section
        id="About"
        className={clsx("mx-[10vw] my-10 z-10", [
          "sm:mx-[10vw] sm:min-h-[50vh]",
          "lg:py-[15vh] lg:mx-[20vw]",
        ])}
      >
        <div
          className={clsx(
            "font-inter min-w-full",
            "flex flex-col items-center gap-3",
            "sm:flex-row sm:justify-between"
          )}
        >
          <AboutProfil profil={profil} className={"sm:hidden"} />
          <div className="flex flex-col gap-1">
            <AboutDescription />
            <AboutButtonIcon />
          </div>
          <AboutProfil profil={profil} className={"hidden sm:inline-block"} />
        </div>
      </section>
      {/* <Wave2
        className={"absolute bottom-0 left-0 right-0 mix-blend-difference"}
      /> */}
    </div>
  );
}
