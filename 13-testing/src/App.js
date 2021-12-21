import { useState } from "react";
import "./App.css";


function App() {
  const [toggle, setToggle] = useState(true);
  const [prenom, setPrenom] = useState("Alexandre");

  const toggleFunc = () => {
    setToggle(prevState => !prevState);
    setPrenom("Paul");
  };

  console.log(prenom + " " + Date.now());
  console.log(toggle + " " + Date.now());

  return (
    <div className="App">
      <button
        onClick={() => {
          toggleFunc();
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default App;
