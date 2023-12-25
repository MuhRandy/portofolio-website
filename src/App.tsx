import { Routes, Route, NavigateFunction } from "react-router-dom";
import AddPorto from "./component/Projects/AddPorto";
import MainPage from "./component/MainPage";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./component/Login";

type GlobalContent = {
  navigate: NavigateFunction;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  renderCount: number;
  setRenderCount: (renderCount: number) => void;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
};

export const AppContext = createContext<GlobalContent>({
  navigate: () => {},
  isLoading: false,
  setIsLoading: () => {},
  renderCount: 0,
  setRenderCount: () => {},
  isAuth: false,
  setIsAuth: () => {},
});

function App() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderCount, setRenderCount] = useState<number>(0);
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("isAuth")));

  return (
    <AppContext.Provider
      value={{
        navigate,
        isLoading,
        setIsLoading,
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
