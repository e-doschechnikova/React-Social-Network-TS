import React from "react";
import state from "./redux/State";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(state);
