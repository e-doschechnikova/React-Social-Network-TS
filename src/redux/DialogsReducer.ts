import { ActionsTypes, DialogPageStateType } from "./State";

const UPDATE_FOR_NEW_MESSAGE = "UPDATE-FOR-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const DialogsReducer = (state: DialogPageStateType, action: ActionsTypes) => {
  if (action.type === UPDATE_FOR_NEW_MESSAGE) {
    state.messageForNewMessage = action.newMessage;
  } else if (action.type === SEND_MESSAGE) {
    let newMessage = state.messageForNewMessage;
    state.messageForNewMessage = "";
    state.messages.push({ id: 6, message: newMessage });
  }

  return state;
};

export default DialogsReducer;
