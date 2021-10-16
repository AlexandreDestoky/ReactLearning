import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar";

function App() {
  const [age, setAge] = useState(37);
  const [listeNav, setListeNav] = useState(["Accueil","Contact","Projets"])

  const moins10 = () => {
    if (age <= 0) return;
    setAge(age => age - 10);
  };

  return (
    <div className="App">
      <NavBar liste={listeNav}/>
      <button onClick={moins10}>Moins 10</button>
      {age > 18 && <p>Vous êtes majeur</p>}
      <p>{age > 16 ? "Vous pouvez" : "Vous ne pouvez pas"} boire de la bière</p>
    </div>
  );
}

export default App;
