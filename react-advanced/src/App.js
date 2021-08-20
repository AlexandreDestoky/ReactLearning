import {useState,useEffect} from "react";
import './App.css';

function App() {

  const [timer, setTimer] = useState(1)
  
  // setInterval(() => {
  //   setTimer(timer + 1);
  //   console.log("lancement");
  // }, 1000);

  
  useEffect(() => {
    const timeur = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000);
    return () => {
      clearInterval(timeur);
    }
  }, [])




  return (
    <div className="App">
      <h1>Timer : {timer}</h1>
    </div>
  );
}

export default App;
