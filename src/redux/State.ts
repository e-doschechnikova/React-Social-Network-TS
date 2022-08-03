const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_FOR_NEW_MESSAGE = "UPDATE-FOR-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

///------------------------- type for state ----------------------------------\\\

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
  messageForNewMessage: string;
};
type FriendsSidebarStateType = {
  id: number;
  name: string;
  avatar: string;
};
type SidebarStateType = {
  friendsSidebar: Array<FriendsSidebarStateType>;
};

export type StateType = {
  dialogsPage: DialogPageStateType;
  profilePage: ProfilePageStateType;
};

export type RootStateType = {
  profilePage: ProfilePageStateType;
  dialogsPage: DialogPageStateType;
  sidebar: SidebarStateType;
};

///------------------------- type for components -------------------------------\\\

export type AppPropsType = {
  appState: RootStateType;
  // addPostCallBack: () => void;
  // updateNewPostText: (newText: string) => void;
  dispatch: (action: ActionsTypes) => void;
};
export type MyPostPropsType = {
  posts: Array<PostStateType>;
  // addPostCallBack: () => void;
  messageForNewPost: string;
  // updateNewPostText: (newText: string) => void;
  dispatch: (action: ActionsTypes) => void;
};

export type ProfilePagePropsType = {
  posts: Array<PostStateType>;
  // addPostCallBack: () => void;
  messageForNewPost: string;
  // updateNewPostText: (newText: string) => void;
  dispatch: (action: ActionsTypes) => void;
};

export type DialogPagePropsType = {
  dialogs: Array<DialogStateType>;
  messages: Array<MessageStateType>;
  newMessageText: string;
  dispatch: (action: ActionsTypes) => void;
};

///------------------------- type for store ------------------------------------\\\

export type StoreType = {
  _state: RootStateType;
  _callSubscriber: (state: RootStateType) => void;

  // addPost: () => void;
  // updateNewPostText: (newText: string) => void;

  subscribe: (observer: (state: RootStateType) => void) => void;
  getState: () => RootStateType;

  dispatch: (action: ActionsTypes) => void;
};

///------------------------- type for action -----------------------------------\\\

export type ActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof updateNewMessageTextAC>;

///-----------------------------------------------------------------------------\\\

export const addPostAC = () => {
  return {
    type: ADD_POST,
  } as const;
};

export const updateNewPostTextAC = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
  } as const;
};

export const sendMessageAC = () => {
  return {
    type: SEND_MESSAGE,
  } as const;
};

export const updateNewMessageTextAC = (newMessage: string) => {
  return {
    type: UPDATE_FOR_NEW_MESSAGE,
    newMessage: newMessage,
  } as const;
};

export const store: StoreType = {
  _state: {
    profilePage: {
      messageForNewPost: "hi",
      posts: [
        { id: 1, post: "Hi", likesCount: 5 },
        { id: 2, post: "I`am lost!!!", likesCount: 2 },
        { id: 3, post: "Wow! It's really you ", likesCount: 15 },
        { id: 4, post: "How are you?", likesCount: 4 },
        {
          id: 5,
          post: "And who is it? And how did I get here?",
          likesCount: 1,
        },
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
      messageForNewMessage: "",
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
  },
  _callSubscriber() {
    console.log("state changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  // addPost() {
  //   const newPost: PostStateType = {
  //     id: 5,
  //     post: this._state.profilePage.messageForNewPost,
  //     likesCount: 0,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._callSubscriber(this._state);
  // },

  // updateNewPostText(newText: string) {
  //   this._state.profilePage.messageForNewPost = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost: PostStateType = {
        id: 5,
        post: this._state.profilePage.messageForNewPost,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.messageForNewPost = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_FOR_NEW_MESSAGE) {
      this._state.dialogsPage.messageForNewMessage = action.newMessage;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = this._state.dialogsPage.messageForNewMessage;
      this._state.dialogsPage.messageForNewMessage = "";
      this._state.dialogsPage.messages.push({ id: 6, message: newMessage });
      this._callSubscriber(this._state);
    }
  },
};

// window.store = store;
