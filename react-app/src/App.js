import { useState } from "react";
import Item from "./Item.js";

function App() {
  console.log("chargement app");
  //Declaration
  const [age, setAge] = useState(24);

  // Modification
  const changeAge = () => setAge(age * 2);

  return (
    <div className="App">
      <h1>Coucou je suis l'App</h1>
      <h2>{age}</h2>
      <button onClick={changeAge}> +10 ans</button>
      <hr />
      <Item prenom="Alexandre" age={age}/>
      <Item prenom="BENOIT"/>
    </div>
  );
}

export default App;
