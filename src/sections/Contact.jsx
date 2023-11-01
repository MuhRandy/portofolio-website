import Input from "../component/Input";
import clsx from "clsx";

export default function Contact() {
  return (
    <section
      id="Contact"
      className={clsx(
        "mt-10 mx-5",
        "sm:mx-[10vw] sm:min-h-[70vw] sm:flex sm:items-center"
      )}
    >
      <div className="flex justify-between min-w-full">
        <h1
          className={clsx(
            "text-lg leading-4 font-bold text-left flex flex-col font-inter",
            [
              "sm:text-2xl sm:leading-5",
              "md:text-3xl md:leading-6",
              "lg:text-5xl lg:leading-10",
            ]
          )}
        >
          <span>Get in touch</span>
          <span>Contact me</span>
        </h1>
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
          <input
            type="submit"
            value={"Send"}
            className={clsx(
              "bg-black text-white rounded-md self-center text-sm py-1 px-4",
              "sm:text-lg sm:px-6"
            )}
          />
          {/* <span>{done && "Thanks for contacting me!"}</span> */}
        </form>
      </div>
    </section>
  );
}
