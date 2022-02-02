import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import Accord from "./Components/Accord/Accord";
import Navbar from "./Components/Navbar/Navbar";

function App() {


  return (
    <div className="App">
      <Modal/>
      {/* <Accord/> */}
      <Navbar/>
    </div>
  );
}

export default App;
