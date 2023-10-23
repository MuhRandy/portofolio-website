import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";

register();

export default function Card() {
  const project = [
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
    <swiper-container
      space-between={"30"}
      slides-per-view={"2.5"}
      grab-cursor={true}
      className="w-9"
    >
      {project.map((i, index) => (
        <swiper-slide key={index}>
          <img src={i.img} alt={i.img} className="shadow-black shadow-sm" />
          <h1 className="text-center text-2xl font-medium text-secondary py-4 underline">
            {i.name}
          </h1>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
