import { rerenderEntireTree } from "./../render";
///------------------------- type for state----------------------------------
type MessageStateType = {
  id: number;
  message: string;
};
type DialogStateType = {
  id: number;
  name: string;
};
type PostStateType = {
  id: number;
  post: string;
  likesCount: number;
};
type ProfilePageStateType = {
  messageForNewPost: string;
  posts: Array<PostStateType>;
};
type DialogPageStateType = {
  dialogs: Array<DialogStateType>;
  messages: Array<MessageStateType>;
};
type FriendsSidebarStateType = {
  id: number;
  name: string;
  avatar: string;
};
type SidebarStateType = {
  friendsSidebar: Array<FriendsSidebarStateType>;
};
export type RootStateType = {
  profilePage: ProfilePageStateType;
  dialogsPage: DialogPageStateType;
  sidebar: SidebarStateType;
};
///------------------------- type for components-------------------------------

export type AppPropsType = {
  appState: RootStateType;
  addPostCallBack: (postMessage: string) => void;
};
export type MyPostPropsType = {
  posts: Array<PostStateType>;
  addPostCallBack: (postMessage: string) => void;
  messageForNewPost: string;
};

export type ProfilePagePropsType = {
  posts: Array<PostStateType>;
  addPostCallBack: (postMessage: string) => void;
  messageForNewPost: string;
};

export type DialogPagePropsType = {
  dialogs: Array<DialogStateType>;
  messages: Array<MessageStateType>;
};
///

let state: RootStateType = {
  profilePage: {
    messageForNewPost: "",
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
  sidebar: {
    friendsSidebar: [
      {
        id: 1,
        name: "Lama Iliya",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eTHoHEyBCjd-p5MA-pUIvItDoaKI7e-A5KsHZrC715mj_B3YtZPF2Cw26mpv2Xzijqk&usqp=CAU",
      },
      {
        id: 3,
        name: "Lama Papa",
        avatar:
          "https://i.pinimg.com/474x/db/0a/15/db0a1537246c4867dd7a312fe23bea12.jpg",
      },
      {
        id: 4,
        name: "Lama Ira",
        avatar:
          "https://i.pinimg.com/736x/fa/7d/6c/fa7d6cf13f3dd106d6d1af501aecb1d8.jpg",
      },
    ],
  },
};

export const addPost = (postMessage: string) => {
  const newPost: PostStateType = {
    id: 5,
    post: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
