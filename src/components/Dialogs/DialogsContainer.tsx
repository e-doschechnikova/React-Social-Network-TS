import React from "react";
import {DialogPageStateType} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {sendMessageAC, updateNewMessageTextAC} from "../../Redux/dialogs-reducer";

type mapStateToPropsType = {
    dialogsPage: DialogPageStateType
}
type mapDispatchToPropsType = {
    messageForNewMessage: (text: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        messageForNewMessage: (text: string) => dispatch(updateNewMessageTextAC(text)),
        sendMessage: () => dispatch(sendMessageAC())

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);