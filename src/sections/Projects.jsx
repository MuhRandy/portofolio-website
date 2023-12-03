import Card from "../component/Projects/Card";
import "swiper/css";
import { register } from "swiper/element/bundle";
import personalPortofolioWebsite from "../assets/projects/personal-portofolio-website.jpg";
import randomQuoteMachine from "../assets/projects/random-quote-machine.jpg";
import reactMarkdownPreview from "../assets/projects/react-markdown-preview.jpg";
import Section from "../component/Section";

register();

export default function Projects() {
  const projects = [
    {
      name: "Personal Portofolio Website",
      desc: "A simple responsive one page portfolio website with toggle for darkmode and smooth scrolling when menu clicked",
      img: personalPortofolioWebsite,
      link: "portofolio-website/",
    },
    {
      name: "Random Quote Machine",
      desc: "A simple responsive random quote web that using free api and user can share quote to twitter with single click",
      img: randomQuoteMachine,
      link: "random-quote-machine/",
    },
    {
      name: "React Markdown Preview",
      desc: "A simple responsive markdown preview with maximize and minimize button, and user also can choose layout between side by side or top and down",
      img: reactMarkdownPreview,
      link: "react-markdown-preview-fcc/",
    },
  ];

  return (
    <Section id="project">
      <Section.Title className={"mb-5"}>My Project</Section.Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            img={project.img}
            link={project.link}
            desc={project.desc}
          />
        ))}
      </div>
    </Section>
  );
}
