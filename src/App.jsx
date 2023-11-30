import Navbar from "./component/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Work from "./sections/Work";
import polygonScater from "./assets/polygon-scatter-haikei.svg";
import Footer from "./component/Footer";

function App() {
  return (
    <main
      style={{ "--image-url": `url(${polygonScater})` }}
      className="bg-white bg-[image:var(--image-url)]"
    >
      <Navbar />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
