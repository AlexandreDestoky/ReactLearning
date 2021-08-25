import { createStore } from "redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";

import counterReducer from "./reducers/counterReducer.js";
import addCartReducer from "./reducers/addCartReducer.js";
import dataImgReducer from "./reducers/dataImgReducer.js";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counterReducer,
  addCartReducer,
  dataImgReducer
});

// const customMiddleware = store => next => action => {
//   next();
// }

// const Store = createStore(rootReducer,applyMiddleware(customMiddleware));
const Store = createStore(rootReducer,applyMiddleware(thunk));

export default Store;
