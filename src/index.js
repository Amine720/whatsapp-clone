import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initialState, actionTypes } from "./reducer";
import reducer from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
