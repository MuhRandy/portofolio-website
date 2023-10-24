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
import Input from "../component/Input";

export default function Contact() {
  return (
    <section id="Contact" className="flex min-h-[100vh] items-center px-20">
      <div className="flex justify-between min-w-full mt-18">
        <h1 className="text-[59px] font-bold text-left flex flex-col font-inter">
          <span>Get in touch</span>
          <span className="mt-[-30px]">Contact me</span>
        </h1>
        <form
          className="flex flex-col gap-3 mt-16 pr-10" /* ref={form}  onSubmit={sendEmail}*/
        >
          <Input name={"user_name"} placeholder={"Name"} />
          <Input type="email" name="user_email" placeholder="Email" />
          <textarea
            name="message"
            className="border-2 rounded-md border-black p-1 h-40 text-xl"
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            value={"Send"}
            className="bg-black text-white w-32 rounded-md self-center py-2 text-xl"
          />
          {/* <span>{done && "Thanks for contacting me!"}</span> */}
        </form>
      </div>
    </section>
  );
}
