import { useState,useMemo } from "react";
import "./App.css";
import Content from "./Content";

function App() {
  console.log("MaJ de l'APP");
  const [toggle, setToggle] = useState(false);
  const invToggle = () => setToggle(!toggle);
  // const tab = [1,2,3,4]

  const tab = useMemo(() => [1,2,3,4], [])

  return (
    <div className="App">
      <Content num={tab}/>
      <hr />
      <button onClick={invToggle}>Clique</button>
      <p>{toggle ? "Vrai" : "Faux"}</p>
    </div>
  );
}

export default App;
