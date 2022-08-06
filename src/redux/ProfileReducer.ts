import { ActionsTypes, ProfilePageStateType } from "./State";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type PostStateType = {
  id: number;
  post: string;
  likesCount: number;
};

const ProfileReducer = (state: ProfilePageStateType, action: ActionsTypes) => {
  if (action.type === ADD_POST) {
    const newPost: PostStateType = {
      id: 5,
      post: state.messageForNewPost,
      likesCount: 0,
    };
    state.posts.push(newPost);
    state.messageForNewPost = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.messageForNewPost = action.newText;
  }

  return state;
};

export default ProfileReducer;
