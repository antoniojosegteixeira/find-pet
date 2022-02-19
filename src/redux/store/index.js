import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "../reducers/combineReducers";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
