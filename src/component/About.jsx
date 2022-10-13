import profil from "../assets/profil.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function About() {
  return (
    <section id="About" className="flex items-center justify-center">
      <div className="flex justify-between items-center mt-[80px] gap-5">
        {/* <image */}
        <div className="h-60 w-60 mx-auto rounded-[20px] overflow-hidden border-2">
          <img src={profil} alt="profil" />
        </div>
        {/* image/> */}
        <div className="text-4xl mt-5 w-[550px]">
          <h1 className=" font-medium font-libre text-center">About Me</h1>
          <p className="text-2xl mt-[40px] font-serif text-justify">
            I am Muhammad Randy a passionate front end web developer. I am a
            beginner in the front end web developer and still worked with a
            varied web developer framework like tailwind and react js.
          </p>
        </div>
      </div>
    </section>
  );
}
