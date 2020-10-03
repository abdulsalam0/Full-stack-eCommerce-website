import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//redux reducers
import { productListReducer } from "./reducers/productReducers";

// Creating the reducer
const reducer = combineReducers({
  productList: productListReducer,
});

// Data that the store will have at the start
const initialState = {};

// any middleware that you want to pass in
const middleware = [thunk];

//creating a store object
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
