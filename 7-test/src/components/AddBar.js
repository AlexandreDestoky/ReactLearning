import React from "react";

export default function AddBar(props) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <p>Que Faut-il faire ?</p>
      <input type="text" placeholder="tâches" onChange={props.change} value={props.input} />
      <button
        onClick={() => {
          props.add();
        }}
      >
        Ajouter
      </button>
    </form>
  );
}
