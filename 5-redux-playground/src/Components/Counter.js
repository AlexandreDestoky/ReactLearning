import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const incrFunc = () => {
    dispatch({
      type: "INCR",
    });
  };

  const decrFunc = () => {
    dispatch({
      type: "DECR",
    });
  };

  return (
    <div>
      <h1>Le beau compteur</h1>
      <p>On est à : {count}</p>
      <button onClick={incrFunc}>+ 1</button>
      <button onClick={decrFunc}>- 1</button>
    </div>
  );
}
