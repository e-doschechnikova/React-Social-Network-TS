import React from "react";
import {Dialogs} from "./Dialogs";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {sendMessageAC} from "../../Redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageText: string) => dispatch(sendMessageAC(newMessageText))

    }
}

///----------- type -----------\\\
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
};
type mapStateToPropsType = {
    dialogsPage: DialogPageStateType,
    isAuth: boolean
}
type mapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

