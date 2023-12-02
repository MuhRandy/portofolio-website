import Navbar from "./component/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./component/Footer";
import Divider from "./component/Divider";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <main className="bg-white">
        <Navbar />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
