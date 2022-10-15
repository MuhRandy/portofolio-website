import profil from "../assets/profil.png";
import { RiReactjsFill } from "react-icons/ri";
import { SiBootstrap, SiTailwindcss } from "react-icons/si";
import Profil from "../component/About/Profil";
import Skill from "../component/About/Skils";

export default function About() {
  const description =
    "I am Muhammad Randy a passionate front end web developer. I am a beginner in the front end web developer and still worked with a varied web developer framework like tailwind and react js.";
  return (
    <section
      id="About"
      className={`flex flex-col items-center justify-center min-h-[90vh]`}
    >
      <div>
        <Profil>
          <Profil.Image src={profil} />
          <Profil.Description>{description}</Profil.Description>
        </Profil>
        <Skill>
          <Skill.List>
            <RiReactjsFill className="text-blue-500" />
            <h4 className="font-libre">
              React Js <span className="hidden">Framework</span>
            </h4>
          </Skill.List>
          <Skill.List>
            <SiTailwindcss className="text-blue-500" />
            <h4 className="font-libre">
              Tailwind <span className="hidden">Framework</span>
            </h4>
          </Skill.List>
          <Skill.List>
            <SiBootstrap className="text-purple-600" />
            <h4 className="font-libre">
              Bootstrap <span className="hidden">Framework</span>
            </h4>
          </Skill.List>
        </Skill>
      </div>
    </section>
  );
}
