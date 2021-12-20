import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal close={props.close}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map(item => (
          <CartItem {...item} key={item.id} />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.close}>
          Close
        </button>
        {cartCtx.items.length > 0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
