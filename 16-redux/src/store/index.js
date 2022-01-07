import { createStore } from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit"

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name:"counter",
  initialState,
  reducers: {
    increment(state,action) {
     state.counter +=action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
})

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, counter: state.counter + action.amount };
//     case "decrement":
//       return { ...state, counter: state.counter - 1 };
//     case "toggle":
//       return { ...state, showCounter: !state.showCounter };

//     default:
//       return state;
//   }
// };
// const store = createStore(counterReducer);

const store = configureStore({
  reducer: counterSlice.reducer
})
export default store;

export const counterActions = counterSlice.actions;