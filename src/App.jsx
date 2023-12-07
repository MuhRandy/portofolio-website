import { Routes, Route } from "react-router-dom";
import AddPorto from "./component/Projects/AddPorto";
import MainPage from "./component/MainPage";

function App() {
  return (
    <>
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
