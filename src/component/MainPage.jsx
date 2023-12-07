import About from "../sections/About";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import Divider from "./Divider";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-slate-700 dark:text-white">
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default MainPage;
