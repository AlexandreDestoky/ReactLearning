import {useState,useEffect} from "react";
import './App.css';

function App() {
  const [dataComponent, setDataComponent] = useState(1)

  useEffect(() => {
    console.log("chargement de App");
  },[])
  
  const augmenter = () => setDataComponent(dataComponent + 1);
  const diminuer = () => {
    if(dataComponent > 0) setDataComponent(dataComponent - 1)
  };

  return (
    <div className="App">
      <p>Le state est : {dataComponent}</p>
      <button onClick={augmenter}>Plus 1</button>
      <button onClick={diminuer}>Moins 1</button>
    </div>
  );
}

export default App;
