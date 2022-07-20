import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/State";

export const rerenderEntireTree = (state: any) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
        // appState={store.getState()}
        // addPostCallBack={store.addPost}
        // updateNewPostText={store.updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
