import Input from '../component/Input';

export default function Contact() {
  return (
    <section id="Contact" className="mt-10 mx-5">
      <div className="flex justify-between min-w-full">
        <h1 className="text-lg leading-4 font-bold text-left flex flex-col font-inter">
          <span>Get in touch</span>
          <span className="">Contact me</span>
        </h1>
        <form
          className="flex flex-col gap-1" /* ref={form}  onSubmit={sendEmail}*/
        >
          <Input name={'user_name'} placeholder={'Name'} />
          <Input type="email" name="user_email" placeholder="Email" />
          <textarea
            name="message"
            className="border rounded-md border-black p-1 h-40 w-[50vw] text-sm"
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            value={'Send'}
            className="bg-black text-white rounded-md self-center text-sm py-1 px-4"
          />
          {/* <span>{done && "Thanks for contacting me!"}</span> */}
        </form>
      </div>
    </section>
  );
}
