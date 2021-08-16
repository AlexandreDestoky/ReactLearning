import { useState } from "react";
// import Item from "./Components/Item/Item.js";

function App() {
  const [inputData,setInputData] = useState("");

  const changeInput = (e) => {
    setInputData(e.target.value)
  }
  console.log(inputData);

  return (
    <div className="App">
      <h1>Coucou je suis l'App</h1>
      <input type="text" value={inputData}onInput={e => changeInput(e)} />
      {/* <Item prenom="BENOIT"/> */}
    </div>
  );
}

export default App;
