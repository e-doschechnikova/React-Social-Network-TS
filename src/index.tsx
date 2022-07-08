import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, { addPost, RootStateType } from "./redux/State";
import { rerenderEntireTree } from "./render";

// export const rerenderEntireTree = (state: RootStateType) => {
//   ReactDOM.render(
//     <App appState={state} addPostCallBack={addPost} />,
//     document.getElementById("root")
//   );
// };

rerenderEntireTree(state);
