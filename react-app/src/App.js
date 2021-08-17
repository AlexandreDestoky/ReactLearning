import { useState } from "react";
// import Item from "./Components/Item/Item.js";

function App() {
  const [dataArr, setDataArr] = useState([{ nom: "Julien" }, { nom: "Marc" }, { nom: "Thomas" }, { nom: "Patrick" }]);

  return (
    <div className="App">
      <ul>
        {dataArr.map((el, index) => (<li key={index}>{el.nom}</li>))}
      </ul>
    </div>
  );
}

export default App;
