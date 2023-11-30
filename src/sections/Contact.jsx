import { motion } from "framer-motion";
import Input from "../component/Input";
import clsx from "clsx";

export default function Contact() {
  return (
    <section
      id="Contact"
      className={clsx("mx-5 py-[10vh] mb-[18vh]", [
        "sm:mx-[10vw] sm:mb-[10vh]",
        "lg:py-[15vh]",
      ])}
    >
      <div className="flex justify-between min-w-full">
        <motion.h1
          initial={{ opacity: 0, bottom: "-20px" }}
          whileInView={{ opacity: 1, bottom: "0px" }}
          transition={{ duration: 2, type: "spring" }}
          className={clsx(
            "relative text-lg leading-4 font-bold text-left font-inter text-white",
            "mix-blend-difference",
            "flex flex-col",
            [
              "sm:text-2xl sm:leading-5",
              "md:text-3xl md:leading-6",
              "lg:text-5xl lg:leading-10",
            ]
          )}
        >
          <span>Get in touch</span>
          <span>Contact me</span>
        </motion.h1>
        <form
          className={clsx(
            "flex flex-col gap-1",
            "sm:gap-2"
          )} /* ref={form}  onSubmit={sendEmail}*/
        >
          <Input name={"user_name"} placeholder={"Name"} />
          <Input type="email" name="user_email" placeholder="Email" />
          <textarea
            name="message"
            className={clsx(
              "border rounded-md border-black p-1 h-40 w-[50vw] text-sm",
              "sm:text-lg sm:border-2"
            )}
            placeholder="Message"
          ></textarea>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, type: "spring" }}
            type="submit"
            value={"Send"}
            className={clsx(
              "bg-black cursor-pointer text-white rounded-md self-center text-sm py-1 px-4",
              "sm:text-lg sm:px-6"
            )}
          />
          {/* <span>{done && "Thanks for contacting me!"}</span> */}
        </form>
      </div>
    </section>
  );
}
