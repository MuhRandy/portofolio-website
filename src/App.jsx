import { Routes, Route } from "react-router-dom";
import AddPorto from "./component/Projects/AddPorto";
import MainPage from "./component/MainPage";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./component/Login";

export const AppContext = createContext();

function App() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [renderCount, setRenderCount] = useState(0);
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("isAuth")));

  return (
    <AppContext.Provider
      value={{
        navigate,
        setIsLoading,
        isLoading,
        renderCount,
        setRenderCount,
        isAuth,
        setIsAuth,
      }}
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-portfolio" element={<AddPorto />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
