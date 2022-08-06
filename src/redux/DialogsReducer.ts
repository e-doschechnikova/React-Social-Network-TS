import {ActionsTypes, DialogPageStateType} from "./State";

const UPDATE_FOR_NEW_MESSAGE = "UPDATE-FOR-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const DialogsReducer = (state: DialogPageStateType, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_FOR_NEW_MESSAGE:
            state.messageForNewMessage = action.newMessage;
            return state
        case SEND_MESSAGE:
            let newMessage = state.messageForNewMessage;
            state.messageForNewMessage = "";
            state.messages.push({id: 6, message: newMessage});
            return state
        default:
            return state;
    }
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

export default DialogsReducer;
