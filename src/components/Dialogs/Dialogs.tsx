import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageFormRedux} from "./Message/MessageForm/AddMessageForm";


export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
        <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
    ));
    const messagesElements = props.dialogsPage.messages.map((message) => (
        <Message key={message.id} message={message.message}/>
    ));
    const addNewMessage = (formData: FormDataType) => {
        props.sendMessage(formData.newMessageText)

    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    );
};


///----------- type -----------\\\
export type FormDataType = {
    newMessageText: string
}