import React from "react";


import MainHeader from "./components/MainHeader/MainHeader";
import  { AuthContextProvider } from "./store/auth-context";
import Main from "./components/Main";

function App() {
  return (
    <AuthContextProvider>
      <MainHeader />
      <Main/>
    </AuthContextProvider>
  );
}

export default App;
