import React from "react";
import {DialogPageStateType} from "../../Redux/Store";
import {sendMessageAC, updateNewMessageTextAC} from "../../Redux/DialogsReducer";
import {Dialogs} from "./Dialogs";

type mapStateToPropsType = {
    dialogsPage: DialogPageStateType
}
type mapDispatchToPropsType = {
    messageForNewMessage: (text: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

export const DialogsContainer = (props: any) => {

    let state = props.store._state.dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    };
    const onNewMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextAC(text));
    };

    return <Dialogs messageForNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
};
