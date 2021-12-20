import React, { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);

  const nbrOfCartItems = cartCtx.items.reduce((a,b) => a + b.amount,0)
  return (
    <button className={classes.button} onClick={props.onclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nbrOfCartItems}</span>
    </button>
  );
}
