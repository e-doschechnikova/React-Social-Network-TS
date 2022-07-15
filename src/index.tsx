import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store, StoreType } from "./redux/State";

// type RerenderEntireTreeType = (state: RootStateType) => void;

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

rerenderEntireTree();

store.subscribe(rerenderEntireTree);
