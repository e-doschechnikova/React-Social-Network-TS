import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

type DialogsPropsType = {
  id: number;
  name: string;
};

type MessagePropsType = {
  id: number;
  message: string;
};

let dialogs: Array<DialogsPropsType> = [
  { id: 1, name: "Lama Iliya" },
  { id: 2, name: "Lama Mama" },
  { id: 3, name: "Lama Papa" },
  { id: 4, name: "Lama Ira" },
  { id: 5, name: "Lama Egor" },
];

let messages: Array<MessagePropsType> = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Where are you?" },
  { id: 3, message: "OK!" },
  { id: 4, message: "See you later!" },
  { id: 5, message: "Bye!" },
];

export type DialogsMessagesPropsType = {
  dialogs: Array<DialogsPropsType>;
  messages: Array<MessagePropsType>;
};

export type PostPropsType = {
  id: number;
  post: string;
  likesCount: number;
};

export type ProfilePagePropsType = {
  posts: Array<PostPropsType>;
  dialogs: Array<DialogsPropsType>;
  messages: Array<MessagePropsType>;
};

export type MyPostPropsType = {
  posts: Array<PostPropsType>;
};

let posts: Array<PostPropsType> = [
  { id: 1, post: "Hi", likesCount: 5 },
  { id: 2, post: "I`am lost!!!", likesCount: 2 },
  { id: 3, post: "Wow! It's really you ", likesCount: 15 },
  { id: 4, post: "How are you?", likesCount: 4 },
  { id: 5, post: "And who is it? And how did I get here?", likesCount: 1 },
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);
