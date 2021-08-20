import {useState} from "react";
import './App.css';
import Timer from "./Timer.js";

function App() {

  const [toggle, setToggle] = useState(false)

const toggleFunc = () => setToggle(!toggle)


  return (
    <div className="App">
      <Timer/>
      <button onClick={toggleFunc}>Toggle</button>
      <h2>{toggle && <Timer/>}</h2>
    </div>
  );
}

export default App;
