import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";

import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
