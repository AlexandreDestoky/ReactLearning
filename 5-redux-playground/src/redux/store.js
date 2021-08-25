import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";

import CounterReducer from "./Reducers/CounterReducer";
import AddCartReducer from "./Reducers/AddCartReducer";

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer,
});

const customMiddleware = store => next => action => {
  console.log("hello world");
  console.log(store);
}

const Store = createStore(rootReducer,applyMiddleware(customMiddleware));

export default Store;
