import {useState,useEffect} from "react";
import './App.css';

function App() {

  const [dataImg, setDataImg] = useState();
  const [nbr, setNbr] = useState(0)
  console.log("chargement");

  useEffect(() => {
   fetch("https://api.thecatapi.com/v1/images/search")
   .then(response => response.json())
   .then(data => {
     console.log(data);
     setDataImg(data)
   })
  },[nbr])

  return (
    <div className="App">
      <h2>{nbr}</h2>
      <button onClick={()=>setNbr(nbr+ 1)}>Salut</button>
      <hr />
      {dataImg && <img src={dataImg[0].url} alt={dataImg[0].id} style={{width:"500px"}}/>}
    </div>
  );
}

export default App;
