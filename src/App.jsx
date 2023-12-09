import { Routes, Route } from "react-router-dom";
import AddPorto from "./component/Projects/AddPorto";
import MainPage from "./component/MainPage";
import { createContext } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const appContext = createContext();

export const useAppContext = () => useContext(appContext);

function App() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

  return (
    <appContext.Provider
      value={{ navigate, setIsLoading, isLoading, renderCount, setRenderCount }}
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add-portfolio" element={<AddPorto />} />
      </Routes>
    </appContext.Provider>
  );
}

export default App;
