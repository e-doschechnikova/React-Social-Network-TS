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
    ]
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
                messages: [...state.messages, {id: v1(), message: action.newMessageText}]
            }
        default:
            return state;
    }
};

///----------- action creators -----------\\\
export const sendMessageAC = (newMessageText: string
) => {
    return {
        type: SEND_MESSAGE, newMessageText
    } as const;
};
export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: UPDATE_FOR_NEW_MESSAGE,
        newMessage: newMessage,
    } as const;
};

///----------- types -----------\\\
type MessageStateType = {
    id: string;
    message: string;
};
type DialogStateType = {
    id: string;
    name: string;
};
export type DialogPageStateType = {
    dialogs: Array<DialogStateType>;
    messages: Array<MessageStateType>;
}
export type ActionsTypes =
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>;

export default DialogsReducer;
