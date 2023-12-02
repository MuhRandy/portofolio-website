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
    <Section id="project">
      <Section.Title className={"mb-5"}>My Project</Section.Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            img={project.img}
            link={project.link}
          />
        ))}
      </div>
    </Section>
  );
}
