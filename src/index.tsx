import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/State";

export const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
        // appState={state}
        // addPostCallBack={addPost}
        // updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
