import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

import { getCatImg } from "../redux/reducers/dataImgReducer";

export default function Counter() {
  const [cartData, setCartData] = useState(0);

  // const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const { cart, count, imgURL } = useSelector(state => ({
    ...state.addCartReducer,
    ...state.counterReducer,
    ...state.dataImgReducer,
  }));

  const addToCartFunc = () => {
    dispatch({
      type: "ADDCART",
      payload: cartData,
    });
  };

  useEffect(() => {
    dispatch(getCatImg());
  }, []);

  return (
    <div>
      <h1>Le beau compteur</h1>
      <p>On est à : {cart}</p>
      {/* <button onClick={incrFunc}>+ 1</button>
      <button onClick={decrFunc}>- 1</button> */}
      <input type="number" value={cartData} onInput={e => setCartData(e.target.value)} />
      <button onClick={addToCartFunc}>Ajouter au panier</button>
      {imgURL && <img src={imgURL} width="600px" alt="" />}
    </div>
  );
}
