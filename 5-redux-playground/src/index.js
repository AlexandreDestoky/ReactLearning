import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CounterReducer from "./Reducers/CounterReducer";

const StoreCounter = createStore(CounterReducer);

ReactDOM.render(
  <Provider store={StoreCounter}>
    <App />
  </Provider>,
  document.getElementById("root")
);
