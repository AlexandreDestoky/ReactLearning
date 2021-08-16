// import { useState } from "react";
import "./Item.css";
function Item(props) {
  return (
    <div>
      <h1 className="titre-item">Salut je suis {props.prenom} et je viens de l'item</h1>
    </div>
  );
}

export default Item;
