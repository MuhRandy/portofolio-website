import Card from "../component/Card";
import "swiper/css";
import { register } from "swiper/element/bundle";
import personalPortofolioWebsite from "../assets/projects/personal-portofolio-website.jpg";
import randomQuoteMachine from "../assets/projects/random-quote-machine.jpg";
import reactMarkdownPreview from "../assets/projects/react-markdown-preview.jpg";
import clsx from "clsx";
import { motion } from "framer-motion";

register();

export default function Work() {
  const projects = [
    {
      name: "Personal Portofolio Website",
      img: personalPortofolioWebsite,
      link: "portofolio-website/",
    },
    {
      name: "Random Quote Machine",
      img: randomQuoteMachine,
      link: "random-quote-machine/",
    },
    {
      name: "React Markdown Preview",
      img: reactMarkdownPreview,
      link: "react-markdown-preview-fcc/",
    },
  ];

  return (
    <section id="Works" className={clsx("mx-5 py-[10vh]", "sm:mx-[10vw]")}>
      <div>
        <motion.h1
          initial={{ opacity: 0, bottom: "-20px" }}
          whileInView={{ opacity: 1, bottom: "0px" }}
          transition={{ duration: 2, type: "spring" }}
          className={clsx(
            "relative text-lg text-white leading-4 font-bold text-left flex flex-col font-inter mb-2",
            "mix-blend-difference",
            [
              "sm:text-2xl sm:leading-5",
              "md:text-3xl md:leading-6",
              "lg:text-5xl lg:leading-10",
            ]
          )}
        >
          <span>My</span>
          <span>Project</span>
        </motion.h1>
        <swiper-container
          space-between={"30"}
          slides-per-view={"1.5"}
          grab-cursor={true}
        >
          {projects.map((project, index) => (
            <swiper-slide key={index}>
              <Card img={project.img} name={project.name} link={project.link} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}
