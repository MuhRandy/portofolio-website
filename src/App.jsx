import { Tab } from "@headlessui/react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Work from "./component/Work";

function App() {
  return (
    <Tab.Group>
      <div className="sticky top-0 left-0 right-0">
        <Tab.List
          className={
            "flex justify-between border-b-2 bg-white py-2 text-lg font-medium"
          }
        >
          <h1>Randy Portofolio</h1>
          <div>
            <Tab className="text-center px-2 ui-selected:bg-black ui-selected:rounded-xl ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black">
              Home
            </Tab>
            <Tab className="text-center px-2 ui-selected:bg-black ui-selected:rounded-xl ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black">
              About
            </Tab>
            <Tab className="text-center px-2 ui-selected:bg-black ui-selected:rounded-xl ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black">
              Project
            </Tab>
            <Tab className="text-center px-2 ui-selected:bg-black ui-selected:rounded-xl ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black">
              Contact
            </Tab>
          </div>
          {/* ...  */}
        </Tab.List>
      </div>
      <Tab.Panels>
        <Tab.Panel>
          <Home />
          <Footer />
        </Tab.Panel>
        <Tab.Panel>
          <About />
          <Footer />
        </Tab.Panel>
        <Tab.Panel>
          <Work />
          <Footer />
        </Tab.Panel>
        <Tab.Panel>
          <Contact />
          <Footer />
        </Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default App;
