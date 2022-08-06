import DialogsReducer, {sendMessageAC, updateNewMessageTextAC} from "./DialogsReducer";
import ProfileReducer, {addPostAC, updateNewPostTextAC} from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import {v1} from "uuid";
///------------------------- type for state ----------------------------------\\\

type MessageStateType = {
    id: string;
    message: string;
};
type DialogStateType = {
    id: string;
    name: string;
};
type PostStateType = {
    id: string;
    post: string;
    likesCount: number;
};
export type ProfilePageStateType = {
    messageForNewPost: string;
    posts: Array<PostStateType>;
};
export type DialogPageStateType = {
    dialogs: Array<DialogStateType>;
    messages: Array<MessageStateType>;
    messageForNewMessage: string;
};
type FriendsSidebarStateType = {
    id: string;
    name: string;
    avatar: string;
};
export type SidebarStateType = {
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
    dispatch: (action: ActionsTypes) => void;
};
export type MyPostPropsType = {
    posts: Array<PostStateType>;
    messageForNewPost: string;
    dispatch: (action: ActionsTypes) => void;
};

export type ProfilePagePropsType = {
    posts: Array<PostStateType>;
    messageForNewPost: string;
    dispatch: (action: ActionsTypes) => void;
};

export type DialogPagePropsType = {
    dialogs: Array<DialogStateType>;
    messages: Array<MessageStateType>;
    messageForNewMessage: string;
    dispatch: (action: ActionsTypes) => void;
};

///------------------------- type for store ------------------------------------\\\

export type StoreType = {
    _state: RootStateType;
    _callSubscriber: (state: RootStateType) => void;

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


export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "hi",
            posts: [
                {id: v1(), post: "Hi", likesCount: 5},
                {id: v1(), post: "I`am lost!!!", likesCount: 2},
                {id: v1(), post: "Wow! It's really you ", likesCount: 15},
                {id: v1(), post: "How are you?", likesCount: 4},
                {
                    id: v1(),
                    post: "And who is it? And how did I get here?",
                    likesCount: 1,
                },
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Lama Iliya"},
                {id: v1(), name: "Lama Mama"},
                {id: v1(), name: "Lama Papa"},
                {id: v1(), name: "Lama Ira"},
                {id: v1(), name: "Lama Egor"},
            ],
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "Where are you?"},
                {id: v1(), message: "OK!"},
                {id: v1(), message: "See you later!"},
                {id: v1(), message: "Bye!"},
            ],
            messageForNewMessage: "",
        },
        sidebar: {
            friendsSidebar: [
                {
                    id: v1(),
                    name: "Lama Iliya",
                    avatar:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eTHoHEyBCjd-p5MA-pUIvItDoaKI7e-A5KsHZrC715mj_B3YtZPF2Cw26mpv2Xzijqk&usqp=CAU",
                },
                {
                    id: v1(),
                    name: "Lama Papa",
                    avatar:
                        "https://i.pinimg.com/474x/db/0a/15/db0a1537246c4867dd7a312fe23bea12.jpg",
                },
                {
                    id: v1(),
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
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = SidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};

// window.store = store
