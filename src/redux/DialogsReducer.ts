import { ActionsTypes, DialogPagePropsType } from "./State";

const UPDATE_FOR_NEW_MESSAGE = "UPDATE-FOR-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

export const DialogsReducer = (
  state: DialogPagePropsType,
  action: ActionsTypes
) => {
  if (action.type === UPDATE_FOR_NEW_MESSAGE) {
    state.messageForNewMessage = action.newMessage;
  } else if (action.type === SEND_MESSAGE) {
    let newMessage = state.messageForNewMessage;
    state.messageForNewMessage = "";
    state.messages.push({ id: 6, message: newMessage });
  }

  return state;
};
