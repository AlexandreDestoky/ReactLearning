import "./App.css";
import { useState } from "react";
import AddBar from "./components/AddBar";
import Liste from "./components/Liste";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [taches, setTaches] = useState([
    { todo: "Ranger garage", id: uuidv4() },
    { todo: "Faire Courses", id: uuidv4() },
  ]);

  const [valInput, setvalInput] = useState("");

  const supTaches = id => setTaches(taches => taches.filter(el => el.id !== id));
  const addTaches = () => {

    if(valInput ==="") return;
    setTaches(taches =>[ ...taches,{ todo: valInput, id: uuidv4() }]);
    setvalInput("");
  };
  const changeInput = e => {
    setvalInput(e.target.value)
  };

  return (
    <div className="App">
      <h1>ToDoListe Basique</h1>
      <AddBar add={addTaches} change={changeInput} input={valInput} />
      <Liste list={taches} suppr={supTaches} />
    </div>
  );
}

export default App;
