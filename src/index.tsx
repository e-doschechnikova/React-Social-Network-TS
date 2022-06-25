import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state from "./redux/State";
import { addPost } from "./redux/State";

addPost("coolclass");

ReactDOM.render(
  <App appState={state} addPostCallBack={addPost} />,
  document.getElementById("root")
);
