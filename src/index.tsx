import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import state, {
  addPost,
  RootStateType,
  updateNewPostText,
} from "./redux/State";

export const rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        appState={state}
        addPostCallBack={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);
