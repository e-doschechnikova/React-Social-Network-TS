type MessagePropsType = {
  id: number;
  message: string;
};
type DialogPropsType = {
  id: number;
  name: string;
};
export type PostPropsType = {
  id: number;
  post: string;
  likesCount: number;
};
export type ProfilePagePropsType = {
  posts: Array<PostPropsType>;
};
export type DialogPagePropsType = {
  dialogs: Array<DialogPropsType>;
  messages: Array<MessagePropsType>;
};
type SidebarPropsType = {};
export type RootStatePropsType = {
  profilePage: ProfilePagePropsType;
  dialogsPage: DialogPagePropsType;
  sidebar: SidebarPropsType;
};
export type AppPropsType = {
  appState: RootStatePropsType;
};

let state: RootStatePropsType = {
  profilePage: {
    posts: [
      { id: 1, post: "Hi", likesCount: 5 },
      { id: 2, post: "I`am lost!!!", likesCount: 2 },
      { id: 3, post: "Wow! It's really you ", likesCount: 15 },
      { id: 4, post: "How are you?", likesCount: 4 },
      { id: 5, post: "And who is it? And how did I get here?", likesCount: 1 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Lama Iliya" },
      { id: 2, name: "Lama Mama" },
      { id: 3, name: "Lama Papa" },
      { id: 4, name: "Lama Ira" },
      { id: 5, name: "Lama Egor" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Where are you?" },
      { id: 3, message: "OK!" },
      { id: 4, message: "See you later!" },
      { id: 5, message: "Bye!" },
    ],
  },
  sidebar: {},
};

export default state;
