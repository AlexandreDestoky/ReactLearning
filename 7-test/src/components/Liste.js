import React from "react";
import ElementList from "./ElementList";

export default function Liste(props) {
  return (
    <ul>
      {props.list.map(el => <ElementList key={el.id} id={el.id} nom={el.todo} suppr={props.suppr}/>)}
    </ul>
  );
}
