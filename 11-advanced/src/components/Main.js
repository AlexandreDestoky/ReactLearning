import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import Login from "./Login/Login";
import Home from "./Home/Home"


export default function Main() {
  const ctx = useContext(AuthContext);

  return (
    <main>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home/>}
    </main>
  );
}
