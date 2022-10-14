import { Tab } from "@headlessui/react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Footer from "./component/Footer";

export default function Content() {
  return (
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
    </Tab.Panels>
  );
}
