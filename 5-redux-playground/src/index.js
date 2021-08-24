import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CounterReducer from "./Reducers/CounterReducer";
import AddCartReducer from "./Reducers/AddCartReducer";

// const StoreCounter = createStore(CounterReducer);
const StoreAddCart = createStore(AddCartReducer);

ReactDOM.render(
  <Provider store={StoreAddCart}>
    <App />
  </Provider>,
  document.getElementById("root")
);
