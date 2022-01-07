import { createStore } from "redux";
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  counter: 0,
  showCounter: true,
};

createSlice({
  name:"counter",
  initialState : initialState,
  reducers: {
    increment(state,action) {
      state.counter = state.counter +action.amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
})

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.amount };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "toggle":
      return { ...state, showCounter: !state.showCounter };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
