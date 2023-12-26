import { Routes, Route, NavigateFunction } from "react-router-dom";
import AddPorto from "./component/Projects/AddPorto";
import MainPage from "./component/MainPage";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./component/Login";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "./utils/firebase-config";

type GlobalContent = {
  navigate: NavigateFunction;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  renderCount: number;
  setRenderCount: (renderCount: number) => void;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  getSingleData: (
    setState: (data: DocumentData) => void,
    projectID: string
  ) => Promise<void>;
};

export const AppContext = createContext<GlobalContent>({
  navigate: () => {},
  isLoading: false,
  setIsLoading: () => {},
  renderCount: 0,
  setRenderCount: () => {},
  isAuth: false,
  setIsAuth: () => {},
  getSingleData: async () => {},
});

function App() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderCount, setRenderCount] = useState<number>(0);
  const [isAuth, setIsAuth] = useState<boolean>(
    Boolean(localStorage.getItem("isAuth"))
  );

  // get post from firestore based on projectID set state according to setState
  const getSingleData = async (
    setState: (data: DocumentData) => void,
    projectID: string
  ) => {
    setIsLoading(true);
    const docRef = doc(db, "projects", projectID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setState(docSnap.data());
      setIsLoading(false);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setIsLoading(false);
    }
  };

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
        getSingleData,
      }}
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-project" element={<AddPorto />} />
        <Route path="/edit-project" element={<AddPorto forEdit={true} />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
