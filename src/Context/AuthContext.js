import { createContext, useEffect, useState } from "react";
import fire from "../fire";
export const authContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const clearInpputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearError = () => {
    setPasswordError("");
    setEmailError("");
  };
  const handleSignUp = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      //    отлавливаем ошибки
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
          default:
            setEmailError(error.message);
            setPasswordError(error.message);
        }
      });
  };
  //   ф-я для логина
  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-not-found":
          case "auth/user-disable":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
          default:
            setEmailError(error.message);
            setPasswordError(error.message);
        }
      });
  };
  //   сделать кнопку  выйти с аккаунта и должна направить в /login
  const handleLogOut = () => {
    fire.auth().signOut();
  };
  //   будет следить за состоянием онлайн user или нет
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // есди user есть то очистим инпуты
        clearInpputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <authContext.Provider
      value={{
        email,
        user,
        password,
        hasAccount,
        emailError,
        passwordError,
        setEmail,
        setPassword,
        handleLogin,
        handleSignUp,
        handleLogOut,
        setHasAccount,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
