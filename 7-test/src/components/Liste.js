import React, { useState } from "react";
import ElementListe from "./ElementListe";

export default function Liste(props) {
  return (
    <>
      <p>Je suis la liste des "{props.nom || "pas de nom"}"</p>
      <ul>
        {props.el.map(nom => (
          <li>{nom}</li>
        ))}
      </ul>
    </>
  );
}
