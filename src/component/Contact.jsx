import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandTwitter,
} from "@tabler/icons";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="bg-white flex items-center justify-center h-screen"
    >
      <div>
        <h1 className="text-5xl font-libre font-medium text-black text-center mb-[70px]">
          My Contact
        </h1>
        <div className="flex items-center justify-center pt-5 gap-5 text-3xl font-medium font-serif">
          <a href="#" className="flex items-center justify-center">
            <AiFillGithub />
            Github
          </a>
          <a
            href="#"
            className="flex items-center justify-center p-3 rounded-full"
          >
            <AiFillTwitterCircle />
            Twitter
          </a>
          <a
            href="#"
            className="flex items-center justify-center p-3 rounded-full"
          >
            <AiFillLinkedin />
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
