import { useState } from "react";

function Item(props) {
  console.log("item chargé " + props.prenom);

  const [itemState,setItemState] = useState("Item state !");

  return (
    <div>
      <button onClick={() => props.func(itemState)}>Test item</button>
      <h1>
        Salut {props.prenom} je viens de l'item {props.age ? `et j'ai ${props.age} ans` : ""}
      </h1>
    </div>
  );
}

export default Item;
