//3.create the store in your src/index.js

import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./App";
// step 3
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
// products
//we dont need to cal them data anymore its actually products
import products from "./data.json";

// step 4
const store = createStore(
  allReducers,
  {
    products: products,
    cart: {},
  },
  // this action is for the devtools redux extension-to see what we do- is optional
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// step 5
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
