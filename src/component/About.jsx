import profil from "../assets/profil.png";
import { RiReactjsFill } from "react-icons/ri";
import { SiBootstrap, SiTailwindcss } from "react-icons/si";

export default function About() {
  const style = {
    itemJustifyCenter: "flex items-center justify-center",
    skils: "border-2 border-black rounded-2xl px-2 flex items-center gap-2",
    profilImg: "h-60 w-60 mx-auto rounded-[20px] overflow-hidden border-2",
    description: "text-2xl mt-[40px] font-serif text-justify",
  };
  return (
    <section id="About" className={`${style.itemJustifyCenter} min-h-[90vh]`}>
      <div>
        <div className={`${style.itemJustifyCenter} gap-5`}>
          {/* <image */}
          <div className={style.profilImg}>
            <img src={profil} alt="profil" />
          </div>
          {/* image/> */}
          <div className="mt-5 w-[550px]">
            <h1 className="text-4xl font-medium font-libre text-center">
              About Me
            </h1>
            <p className={style.description}>
              I am Muhammad Randy a passionate front end web developer. I am a
              beginner in the front end web developer and still worked with a
              varied web developer framework like tailwind and react js.
            </p>
          </div>
        </div>
        <div className="flex justify-start mt-10">
          <div>
            <h1 className="text-3xl font-medium font-libre text-start">
              My Skill
            </h1>
            <div className="flex justify-center mt-4 gap-4 text-xl font-medium">
              <div className={style.skils}>
                <RiReactjsFill className="text-blue-500" />
                <h4 className="font-libre">React Js Framework</h4>
              </div>
              <div className={style.skils}>
                <SiTailwindcss className="text-blue-500" />
                <h4 className="font-libre">Tailwind Framework</h4>
              </div>
              <div className={style.skils}>
                <SiBootstrap className="text-purple-600" />
                <h4 className="font-libre">Bootstrap Framework</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
