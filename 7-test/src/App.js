import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {

  const [age, setAge] = useState(37);

  const moins10 =  () => {
    if(age <= 0) return;
    setAge(age => age-10);
  }

  return (
    <div className="App">

<button onClick={moins10}>Moins 10</button>
      {age > 18 && <p>Vous êtes majeur</p>}
      <p>{age > 16 ? "Vous pouvez": "Vous ne pouvez pas"} boire de la bière</p>
    </div>
  );
}

export default App;
