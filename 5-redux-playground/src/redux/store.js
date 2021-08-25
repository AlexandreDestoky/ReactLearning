import { createStore } from "redux";
import { combineReducers } from "redux";

import CounterReducer from "./Reducers/CounterReducer";
import AddCartReducer from "./Reducers/AddCartReducer";

const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer,
});

const Store = createStore(rootReducer);

export default Store;
