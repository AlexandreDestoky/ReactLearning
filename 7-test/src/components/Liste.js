import React from "react";

export default function Liste(props) {
  return (
    <>
      <p>Je suis la liste des "{props.nom || "pas de nom"}"</p>
      <ul>
        {props.tab.map(el => 
          <li key={el.id}>{el.prenom} <span onClick={() =>props.suppr(el.id)}>❌</span></li>
        )}
      </ul>
    </>
  );
}
