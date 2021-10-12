import "./App.css";
import Liste from "./components/Liste";
import { useState } from "react";

function App() {
  const [tabPrenoms, setTabPrenoms] = useState([
    {prenom:"Jean",id:452},
    {prenom:"Thomas",id:52},
    {prenom:"Paul",id:42},
    {prenom:"Pierre",id:45},
  ]);
  const [ours, setOurs] = useState(["Brun", "Polaire"]);

  const supNom = (id) => {
    setTabPrenoms(tabPrenoms => tabPrenoms.filter(el => el.id !== id))
  }
  return (
    <div className="App">
      <p>Je suis l'APP</p>
      <hr />
      <Liste nom="Prénom étudiants" tab={tabPrenoms} suppr={supNom}/>
    </div>
  );
}

export default App;
