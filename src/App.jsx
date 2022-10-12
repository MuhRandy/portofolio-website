import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Work from "./component/Work";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
