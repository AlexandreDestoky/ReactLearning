import { useState } from "react";
// import Item from "./Components/Item/Item.js";

function App() {
  const [toggle, setToggle] = useState(true);
  const changeState = () => {
    setToggle(!toggle);
  };
  // let toggleTxt;
  // if(toggle) {
  //   toggleTxt = <h2>Toggle est vrai</h2>;
  // } else {
  //   toggleTxt = <h2>Toggle est faux</h2>;
  // }
  let toggleTxt = <h2>Toggle est {toggle ? "Vrai":"faux"}</h2>

  return (
    <div className="App">
      <button onClick={changeState}>Inverse State</button>
      {toggleTxt}
    </div>
  );
}

export default App;
