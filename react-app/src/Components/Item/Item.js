// import { useState } from "react";
import "./Item.css";
import {ReactComponent as Gorille} from "./biere.svg"
function Item(props) {
  return (
    <div>
      <h1 className="titre-item">Salut je suis {props.prenom} et je viens de l'item</h1>
      <img src={"/tomate.jpg"} alt="" />
      <Gorille/>
    </div>
  );
}

export default Item;
