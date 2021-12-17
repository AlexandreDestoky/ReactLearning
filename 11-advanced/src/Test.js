import React, { useReducer,useState } from "react";

export default function Test() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "plus100":
        return { ...state, age: state.age + 100 };

      case "renait":
        return { ...state, nom: "Gandalf le blanc" };

      case "cheval": 
      return {...state , cheval : "Grispoil"};

      case "renomme": 
      if(state.cheval) {
        return {...state, cheval : action.payload}
      } else {
        console.log("gandalf ne peut pas renommer un cheval, il n'en a pas");
        return state
      }
      default:
        break;
    }
  };

  let personnage = {
    nom: "Gandalf le gris",
    age: 6000,
    job: "Magicien",
  };

  const [perso, dispatch] = useReducer(reducer, personnage);


  const [perso2, setPerso2] = useState(personnage);

 
  return (
    <div>
      <p>{JSON.stringify(perso)}</p>
      <button onClick={() => dispatch({ type: "plus100" })}>Gagne 100 ans</button>
      <button onClick={() => dispatch({ type: "renait" })}>Renait</button>
      <hr />
      <button onClick={() => dispatch({ type: "cheval" })}>Gagne une monture</button>
      <button onClick={() => dispatch({ type: "renomme",payload : "super grispoil"})}>Renomme gris poil</button>


    </div>
  );
}
