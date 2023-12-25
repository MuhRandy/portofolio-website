import clsx from "clsx";
import Button from "./Button";
import Input from "./Contact/Input";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { AppContext } from "../App";
import { useEffect } from "react";
import { auth } from "../utils/firebase-config";

const Login = () => {
  const { isAuth, setIsAuth, navigate } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("isAuth", "true");
        setIsAuth(true);
        navigate("/");
      })
      .catch((err) => {
        alert("Email atau Password yang Anda Masukkan Salah!");
        console.log(err);
      });
  };
  return (
    <div
      className={clsx(
        "w-full h-screen",
        "flex flex-col justify-center items-center gap-1"
      )}
    >
      <Input
        type="text"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button onClick={signIn}>Login</Button>
        <a href="/">
          <Button>Back</Button>
        </a>
      </div>
    </div>
  );
};

export default Login;
