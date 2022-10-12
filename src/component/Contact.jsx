import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandTwitter,
} from "@tabler/icons";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="bg-secondary h-screen flex items-center justify-center"
    >
      <div>
        <h1 className="text-5xl font-sans font-medium text-primary text-center">
          My Contact
        </h1>
        <div className="flex items-center justify-center pt-5 gap-5 text-lg font-medium">
          <a
            href="#"
            className="flex justify-center bg-primary p-3 rounded-full"
          >
            <IconBrandGithub />
            Github
          </a>
          <a
            href="#"
            className="flex justify-center bg-primary p-3 rounded-full"
          >
            <IconBrandTwitter />
            Twitter
          </a>
          <a
            href="#"
            className="flex justify-center bg-primary p-3 rounded-full"
          >
            <IconBrandGmail />
            Send a Mail
          </a>
        </div>
      </div>
    </section>
  );
}
