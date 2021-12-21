import React, { useCallback, useState } from "react";
import SubList from "./SubList";

export default function List() {
  console.log("liste chargé");
  // let prenoms = ["Jean", "Paul", "Marc"];
  const [prenoms, setPrenoms] = useState(["Jean", "Paul", "Marc", "Andre", "Julien"]);

  const changeToJP = () => {
    setPrenoms(prevState => {
      let newState = [...prevState];
      newState[0] = "Jean-Paul";
      return newState;
    });
  };

  return (
    <>
      <button onClick={changeToJP}>Click</button>
      <ul>
        {prenoms.map((prenom, i) => (
          <SubList key={i} prenom={prenom} />
        ))}
      </ul>
    </>
  );
}
