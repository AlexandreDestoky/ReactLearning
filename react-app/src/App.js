import { useState } from "react";
import Item from "./Item.js";

function App() {
  const [prenom,setPrenom] = useState("Alexandre");
  console.log(prenom);
  console.log(setPrenom);
  return (
    <div className="App">
      <h1>Coucou je suis l'App</h1>

      <Item/>
      <Item/>
      <Item/>
      <Item/>
      {prenom}
      <Item/>
    </div>
  );
}

export default App;
