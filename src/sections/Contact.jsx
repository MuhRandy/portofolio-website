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
    <section
      id="Contact"
      className="flex items-center min-h-screen px-40"
    >
      <div className="flex justify-between min-w-full">
        <h1 className="text-[59px] font-bold text-left flex flex-col font-inter">
          <span>Get in touch</span>
          <span className="mt-[-30px]">Contact me</span>
        </h1>
          <form className="flex flex-col gap-2 mt-[20px] w-[40%]" /* ref={form}  onSubmit={sendEmail}*/>
            <Input name={"user_name"} placeholder={"Name"} />
            <Input
              type="email"
              name="user_email"
              placeholder="Email"
            />
            <textarea
              name="message"
              className="border border-black p-1"
              placeholder="Message"
            ></textarea>
            <input type="submit" value={"Send"} className="bg-black text-white w-[80px]" />
            {/* <span>{done && "Thanks for contacting me!"}</span> */}
          </form>
        </div>
        
    </section>
  );
}
