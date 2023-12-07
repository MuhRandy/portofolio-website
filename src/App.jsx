import Navbar from "./component/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./component/Footer";
import Divider from "./component/Divider";
import Projects from "./sections/Projects";
import { Routes, Route } from "react-router-dom";
import AddPorto from "./component/Projects/AddPorto";
import MainPage from "./component/MainPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/portofolio-website" element={<MainPage />} />
        <Route
          path="/portofolio-website/add-portfolio"
          element={<AddPorto />}
        />
      </Routes>
    </>
  );
}

export default App;
