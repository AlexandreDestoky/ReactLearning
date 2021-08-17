import { useState } from "react";
// import Item from "./Components/Item/Item.js";

function App() {
  const [toggle, setToggle] = useState(true);
  const changeState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <button onClick={changeState}>Inverse State</button>
      <div className={`box ${toggle ? "animated" : ""}`}></div>
    </div>
  );
}

export default App;
