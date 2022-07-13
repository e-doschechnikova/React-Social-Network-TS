import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppPropsType, store } from "./redux/State";
// import state, {
//   addPost,
//   RootStateType,
//   subscribe,
//   updateNewPostText,
// } from "./redux/State";

type RenderEntireTreeType = {
  store: AppPropsType;
};

export const rerenderEntireTree = (store: RenderEntireTreeType) => {
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

rerenderEntireTree(store);

subscribe(rerenderEntireTree);
