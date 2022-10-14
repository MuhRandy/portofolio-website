import profil from "../assets/profil.png";
import { RiReactjsFill } from "react-icons/ri";
import { SiBootstrap, SiTailwindcss } from "react-icons/si";
import Profil from "../component/About/Profil";
import Skill from "../component/About/Skils";

export default function About() {
  return (
    <section
      id="About"
      className={`flex items-center justify-center min-h-[90vh]`}
    >
      <div>
        <Profil>
          <Profil.Image src={profil} />
          <Profil.Description>
            I am Muhammad Randy a passionate front end web developer. I am a
            beginner in the front end web developer and still worked with a
            varied web developer framework like tailwind and react js.
          </Profil.Description>
        </Profil>
        <Skill>
          <Skill.List>
            <RiReactjsFill className="text-blue-500" />
            <h4 className="font-libre">React Js Framework</h4>
          </Skill.List>
          <Skill.List>
            <SiTailwindcss className="text-blue-500" />
            <h4 className="font-libre">Tailwind Framework</h4>
          </Skill.List>
          <Skill.List>
            <SiBootstrap className="text-purple-600" />
            <h4 className="font-libre">Bootstrap Framework</h4>
          </Skill.List>
        </Skill>
      </div>
    </section>
  );
}
