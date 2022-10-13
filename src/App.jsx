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
    <main className=" bg-white">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
