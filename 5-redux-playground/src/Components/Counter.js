import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Counter() {
  const [cartData, setCartData] = useState(0);

  // const count = useSelector(state => state.count);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // const incrFunc = () => {
  //   dispatch({
  //     type: "INCR",
  //   });
  // };

  // const decrFunc = () => {
  //   dispatch({
  //     type: "DECR",
  //   });
  // };

  const addToCartFunc  = () => {
    dispatch({
      type:"ADDCART",
      payload:cartData
    })
  }

  return (
    <div>
      <h1>Le beau compteur</h1>
      <p>On est à : {cart}</p>
      {/* <button onClick={incrFunc}>+ 1</button>
      <button onClick={decrFunc}>- 1</button> */}
      <input type="number" value={cartData} onInput={e => setCartData(e.target.value)} />
      <button onClick={addToCartFunc}>Ajouter au panier</button>
    </div>
  );
}
