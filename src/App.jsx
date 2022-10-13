import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Work from "./component/Work";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import profil from "./assets/profil.png";

function App() {
  return (
    <main className=" bg-white px-10">
      <section className=" min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className=" text-xl font-burtons uppercase">developedbyrandy</h1>
          <ul className=" flex item-center">
            <li>
              <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
            </li>
            <li className=" bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md text-white px-4 py-2 ml-8">
              <a href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className=" text-center p-10 ">
          <h2 className=" text-5xl py-2 text-teal-600 font-medium">
            Muhammad Randy
          </h2>
          <h3 className=" text-2xl py-5">Website Developer</h3>
          <p className=" text-md py-5 leading-8 text-gray-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            consequatur modi culpa incidunt iure nisi. Expedita eveniet aperiam
            atque magni.
          </p>
        </div>
        <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="relative mx-auto rounded-full mt-20 w-80 h-80 bg-gradient-to-b from-teal-600 overflow-hidden">
          <img src={profil} />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <img
              src="https://via.placeholder.com/300"
              className="w-100 h-100"
            />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <img
              src="https://via.placeholder.com/300"
              className="w-100 h-100"
            />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <img
              src="https://via.placeholder.com/1000"
              className="w-100 h-100"
            />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <img
              src="https://via.placeholder.com/300"
              className="w-100 h-100"
            />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products for
            both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={"https://via.placeholder.com/300"}
            />
          </div>
          <div className="basis-1/3 flex-1 ">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={"https://via.placeholder.com/300"}
            />
          </div>
          <div className="basis-1/3 flex-1 ">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={"https://via.placeholder.com/300"}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
