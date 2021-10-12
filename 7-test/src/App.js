import "./App.css";
import Liste from "./components/Liste";
import { useState } from "react";

function App() {
  const [tabPrenoms, setTabPrenoms] = useState(["Jean", "Pierre", "Andre"]);
  const [ours, setOurs] = useState(["Brun", "Polaire"]);
  return (
    <div className="App">
      <p>Je suis l'APP</p>
      <hr />
      <Liste nom="Prénom étudiants" el={tabPrenoms} />
      <Liste nom="Ours" el={ours} />
    </div>
  );
}

export default App;
