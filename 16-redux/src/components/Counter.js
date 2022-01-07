import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {counterActions} from "../store/index"


const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment(4))
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={`${showCounter ? "" : classes.invisible} ${classes.value}`}>
        {counter}
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
