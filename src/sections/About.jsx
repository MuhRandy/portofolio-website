import profil from "../assets/profil.jpg";
import blob from "../assets/blob.svg";
import blob2 from "../assets/blob2.svg";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function About() {
  return (
    <section
      id="About"
      className="flex items-center justify-center gap-20 h-[80vh] w-[100vw] overflow-clip font-inter"
    >
      <div className="w-[35%] flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="text-[59px] font-bold">Muhammad</span>
          <span className="text-[72px] font-bold mt-[-40px]">Randy</span>
        </div>
        <div className="text-[23px] mt-[-20px] text-justify w-[80%]">
          A beginner software engginer from Indonesia who focus on frontend
          website developer.
        </div>
        <div className="flex items-center justify-between w-[80%]">
          <button className="bg-black text-white px-3 rounded py-1 text-xl">
            Download CV
          </button>
          <div className="flex text-4xl gap-2">
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
      <img
        src={profil}
        alt="Muhammad Randy Profil Photo's"
        className="w-[200px] border-solid border-[#625959] border-[1px] rounded-2xl z-10"
      />
      <div className="absolute w-[600px] right-0 bottom-[-325px] z-[0]">
        <img src={blob} alt="blob" />
        <img src={blob2} alt="blob2" />
      </div>
    </section>
  );
}
