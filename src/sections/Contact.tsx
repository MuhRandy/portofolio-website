import { motion } from "framer-motion";
import Input from "../component/Contact/Input";
import clsx from "clsx";
import Section from "../component/Section";
import { cn } from "../utils/utils";

export default function Contact() {
  return (
    <Section
      className={clsx("flex flex-col gap-4", "sm:flex-row sm:justify-between")}
      id="contact"
    >
      <Section.Title className={cn("text-left", "flex flex-col")}>
        <span>Get in touch</span>
        <span>Contact me</span>
      </Section.Title>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
        className={clsx(
          "flex flex-col gap-1 max-w-md",
          "sm:gap-2"
        )} /* ref={form}  onSubmit={sendEmail}*/
      >
        <Input name={"user_name"} placeholder={"Name"} />
        <Input type="email" name="user_email" placeholder="Email" />
        <textarea
          name="message"
          className={clsx(
            "border rounded-md border-black p-1 px-2 h-40 text-sm",
            "sm:text-lg sm:border-2",
            "dark:border-white dark:bg-slate-700 dark:text-white"
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
            "cursor-pointer bg-black text-white rounded-md self-center text-sm py-1 px-4",
            "sm:text-lg sm:px-6",
            "dark:bg-white dark:text-black"
          )}
        />
        {/* <span>{done && "Thanks for contacting me!"}</span> */}
      </motion.form>
    </Section>
  );
}
