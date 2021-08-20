import { useState } from "react";
import Item from "../Item/Item.js";
import { v4 as uuidv4 } from "uuid";

export default function () {
  const [dataArr, setDataArr] = useState([
    { txt: "Promener le chien", id: uuidv4() },
    { txt: "Sport", id: uuidv4() },
    { txt: "Coder avec React", id: uuidv4() },
  ]);

  const deleteElement = id => {
    const filteredState = dataArr.filter(item => item.id !== id);
    setDataArr(filteredState);
  };

  const addElement = e => {
    e.preventDefault();
    const addItem = (e.target.querySelector(".form-control").value);
    const newList = [...dataArr,{txt:addItem,id:uuidv4()}];
    setDataArr(newList);
    e.target.querySelector(".form-control").value = "";
    
  }

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form className="mb-3" onSubmit={addElement}>
        <label htmlFor="todo" className="form-label mt-3">
          Chose à faire
        </label>
        <input type="text" className="form-control" id="todo"/>
        <button className="mt-2 btn btn-primary">Envoyez</button>
      </form>
      <h2>Liste des choses à faire :</h2>
      <ul className="list-group">
        {dataArr.map(el => {
          return <Item txt={el.txt} key={el.id} id={el.id} delFunc={deleteElement} />;
        })}
      </ul>
    </div>
  );
}
