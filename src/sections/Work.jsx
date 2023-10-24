import Card from "../component/Card";
import "swiper/css";
import { register } from "swiper/element/bundle";

register();

export default function Work() {
  const projects = [
    {
      name: "Project 1",
      img: "https://via.placeholder.com/500",
    },
    {
      name: "Project 1",
      img: "https://via.placeholder.com/500",
    },
    {
      name: "Project 1",
      img: "https://via.placeholder.com/500",
    },
    {
      name: "Project 1",
      img: "https://via.placeholder.com/500",
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
          slides-per-view={"3.5"}
          grab-cursor={true}
          className="w-9"
        >
          {projects.map((project, index) => (
            <swiper-slide key={index}>
              <Card img={project.img} name={project.name} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}
