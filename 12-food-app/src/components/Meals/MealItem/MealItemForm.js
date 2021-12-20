import { useContext, useRef } from "react";
import { CartContext } from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = props => {
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = e => {
    e.preventDefault();
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      price:props.price,
      amount:+amountInputRef.current.value
    })
    console.log(amountInputRef.current.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        amountInputRef={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
