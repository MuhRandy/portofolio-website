import { Tab } from "@headlessui/react";
import { HiOutlineCode } from "react-icons/hi";

export default function Navbar() {
  const nav = ["Home", "About", "Project", "Contact"];
  return (
    <div className={"sticky top-0 left-0 right-0"}>
      <Tab.List
        className={
          "flex justify-between border-b-2 bg-white py-2 text-lg font-medium"
        }
      >
        <h1
          className={
            "text-xl md:text-2xl lg:text-3xl font-medium font-archivo text-secondary"
          }
        >
          {"<R/>"}
        </h1>
        <div>
          {nav.map((i, key) => (
            <Tab
              className={
                "text-center px-2 ui-not-selected:bg-white ui-not-selected:text-black ui-not-selected:opacity-50"
              }
              key={key}
            >
              {i}
            </Tab>
          ))}
        </div>
      </Tab.List>
    </div>
  );
}
