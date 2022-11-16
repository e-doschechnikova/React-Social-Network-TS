import React from "react";
import {DialogPageStateType} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {sendMessageAC, updateNewMessageTextAC} from "../../Redux/dialogs-reducer";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: DialogPageStateType,
    isAuth: boolean
}
type mapDispatchToPropsType = {
    messageForNewMessage: (text: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        messageForNewMessage: (text: string) => dispatch(updateNewMessageTextAC(text)),
        sendMessage: () => dispatch(sendMessageAC())

    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
