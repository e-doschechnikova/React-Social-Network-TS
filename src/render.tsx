import React from "react";
import ReactDOM from "react-dom";
import { RootStateType } from "./redux/State";
import { addPost } from "./redux/State";
import App from "./App";

export const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <App appState={state} addPostCallBack={addPost} />,
    document.getElementById("root")
  );
};
