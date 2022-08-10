import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Redux/Store";

export const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState
    rerenderEntireTree(state)
});
