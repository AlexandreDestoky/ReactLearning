import { useEffect, useState } from "react";
import "./App.css";


function App() {
 const [apiData, setApiData] = useState([])

 
 useEffect(() => {
   
    setTimeout(() => {
      setApiData(["Jean","Pierre"])
    }, 3000);
}, [])


  console.log("fin lecture app");
  return (
    <div className="App">
      <p>Mon api : {apiData}</p>

    </div>
  );
}

export default App;
