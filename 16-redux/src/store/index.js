import { createStore } from "react-redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };

    default:
      throw new Error("Mauvaise action, veuillez changer");
  }
};

const store = createStore(counterReducer);

export default store;

