import { Tab } from "@headlessui/react";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Work from "./component/Work";

function App() {
  const style = {
    tab: "text-center px-2 ui-selected:bg-black ui-selected:rounded-xl ui-selected:text-white ui-not-selected:bg-white ui-not-selected:text-black",
    tablist:
      "flex justify-between border-b-2 bg-white py-2 text-lg font-medium",
    brand: "text-3xl font-libre",
    sticky: "sticky top-0 left-0 right-0",
  };
  return (
    <Tab.Group>
      <div className={style.sticky}>
        <Tab.List className={style.tablist}>
          <h1 className={style.brand}>Randy Portofolio</h1>
          <div>
            <Tab className={style.tab}>Home</Tab>
            <Tab className={style.tab}>About</Tab>
            <Tab className={style.tab}>Project</Tab>
            <Tab className={style.tab}>Contact</Tab>
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
