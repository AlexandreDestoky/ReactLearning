import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";

import articleReducer from "./articles/articleReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  articleReducer
})

const Store = createStore(rootReducer,applyMiddleware(thunk));

export default Store;