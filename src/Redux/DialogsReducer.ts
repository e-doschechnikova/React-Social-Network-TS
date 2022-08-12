import {ActionsTypes, DialogPageStateType} from "./Store";
import {v1} from "uuid";

const UPDATE_FOR_NEW_MESSAGE = "UPDATE-FOR-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState: DialogPageStateType = {
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
}

const DialogsReducer = (state: DialogPageStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_FOR_NEW_MESSAGE:
            return {
                ...state, messageForNewMessage: action.newMessage
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: state.messageForNewMessage}],
                messageForNewMessage: ""
            }
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
