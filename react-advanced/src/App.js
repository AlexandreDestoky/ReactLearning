import { useState,useEffect,useRef } from "react";
import "./App.css";
import Summer from "./Summer.mp4"

function App() {
  const [toggle, setToggle] = useState(false);

  const ref = useRef();

  useEffect(() => {
    console.log(ref);
    setTimeout(() => {
      ref.current.pause()
    }, 3000);
  }, []);

  const toggleFunc = () => setToggle(!toggle);

  return (
    <div className="App">

      <video ref={ref} width="750" height="500" autoPlay controls muted>
        <source src={Summer} type="video/mp4"/>
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
