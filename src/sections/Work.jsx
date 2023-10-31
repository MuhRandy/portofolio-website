import Card from "../component/Card";
import "swiper/css";
import { register } from "swiper/element/bundle";
import personalPortofolioWebsite from "../assets/projects/personal-portofolio-website.jpg";
import randomQuoteMachine from "../assets/projects/random-quote-machine.jpg";
import reactMarkdownPreview from "../assets/projects/react-markdown-preview.jpg";

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
    <section id="Works">
      <div className="min-h-screen pt-[44px] mt-18 px-40">
        <h1 className="text-[59px] font-bold text-left flex flex-col font-inter">
          <span>My</span>
          <span className="mt-[-30px]">Project</span>
        </h1>
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
