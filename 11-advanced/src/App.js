import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   setIsLoggedIn(true);
  //   localStorage.setItem("isLoggedIn", "1");
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  const [prenom, setPrenom] = useState("Benoit")
  let x = Date.now();

  useEffect(() => {
    let int = setInterval(() => {
      console.log("salut" + x);
      setPrenom("Andre" + x)
    }, 3000);
    return () => {
      clearInterval(int);
    }
  }, [prenom])

  return (
    <>
      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main> */}
    </>
  );
}

export default App;
