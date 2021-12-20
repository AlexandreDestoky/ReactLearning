import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const nbrOfCartItems = cartCtx.items.reduce((a, b) => a + b.amount, 0);
  const [isHighlight, setIsHighlight] = useState(false);
  const btnClasses = `${classes.button} ${isHighlight ? classes.bump : ""}`;

  useEffect(() => {
    if (nbrOfCartItems === 0) return;
    
    setIsHighlight(true);
    const timer = setTimeout(() => {
      setIsHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  return (
    <button className={btnClasses} onClick={props.onclick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nbrOfCartItems}</span>
    </button>
  );
}
