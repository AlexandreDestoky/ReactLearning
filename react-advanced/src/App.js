import { useState,useEffect,useRef } from "react";
import "./App.css";
import Summer from "./Summer.mp4"

function App() {
  const [toggle, setToggle] = useState(false);

  const ref = useRef([]);

  const addToRef = el => {
    console.log(el);
    if(el && !ref.current.includes(el)) {
      ref.current.push(el)
    }
  }

  useEffect(() => {
    window.addEventListener("resize",actionResize);

    function actionResize(){
      console.log("resized !");
    }

    return () => {
      window.removeEventListener("resize",actionResize)
    }
  }, [])
 






  const toggleFunc = () => setToggle(!toggle);

  return (
    <div className="App">

      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Summer} type="video/mp4"/>
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Summer} type="video/mp4"/>
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Summer} type="video/mp4"/>
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
