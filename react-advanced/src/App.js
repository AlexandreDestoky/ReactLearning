import { useState } from "react";
import "./App.css";
// import Summer from "./Summer.mp4"

function App() {
  const [toggle, setToggle] = useState([1, 1]);

  // const toggleFunc = () => setToggle(!toggle);
  const toggleFunc = () => {
    const newArr = [...toggle];
    const suite = newArr[newArr.length - 1] + newArr[newArr.length - 2];
    newArr.push(suite);
    setToggle(newArr);
  };

  return (
    <div className="App">
      <button onClick={toggleFunc}>Fibonacci</button>
      <ul>
        {toggle.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
