import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { type } from "os";

export type PostPropsType = {
  id: number;
  post: string;
  likesCount: number;
};

export type PostsPropsType = {
  posts: Array<PostPropsType>;
  
};

let posts: Array<PostPropsType> = [
  { id: 1, post: "Hi", likesCount: 5 },
  { id: 2, post: "I`am lost!!!", likesCount: 2 },
  { id: 3, post: "Wow! It's really you ", likesCount: 15 },
  { id: 4, post: "How are you?", likesCount: 4 },
  { id: 5, post: "And who is it? And how did I get here?", likesCount: 1 },
];

ReactDOM.render(<App posts={posts} />, document.getElementById("root"));
