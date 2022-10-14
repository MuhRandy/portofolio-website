import { Tab } from "@headlessui/react";
import { HiOutlineCode } from "react-icons/hi";
import MenuButton from "./MenuButton";

export default function Navbar() {
  const nav = ["About", "Work", "Contact"];
  const style = {
    tab: "text-center px-2 ui-not-selected:bg-white ui-not-selected:text-black ui-not-selected:opacity-50",
    tablist:
      "flex justify-between border-b-2 bg-white py-2 text-lg font-medium",
    brand: "text-xl md:text-2xl lg:text-3xl",
    sticky: "sticky top-0 left-0 right-0",
  };
  return (
    <div className={style.sticky}>
      <Tab.List className={style.tablist}>
        <h1 className={style.brand}>
          <HiOutlineCode />
        </h1>
        <div>
          <Tab className={`${style.tab}`}>Home</Tab>
          <Tab className={style.tab}>About</Tab>
          <Tab className={style.tab}>Project</Tab>
          <Tab className={style.tab}>Contact</Tab>
        </div>
      </Tab.List>
    </div>
  );
}
