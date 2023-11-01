import Navbar from "./component/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Work from "./sections/Work";
import Footer from "./component/Footer";
import blob from "./assets/blob.svg";
import blob2 from "./assets/blob2.svg";
import clsx from "clsx";

function App() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="relative">
        <About />
        <div
          className={clsx(
            "absolute w-[40vw] right-0 bottom-[-10rem] z-[0] hidden"
            // ["sm:block", "md:bottom-[-15rem] md:w-[50vw]"]
          )}
        >
          <img src={blob} alt="blob" />
          <img src={blob2} alt="blob2" />
        </div>
      </div>
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
