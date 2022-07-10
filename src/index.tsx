import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state, {
  addPost,
  RootStateType,
  updateNewPostText,
} from "./redux/State";

export const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <App
      appState={state}
      addPostCallBack={addPost}
      updateNewPostText={updateNewPostText}
    />,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);
