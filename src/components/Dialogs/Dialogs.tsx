import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name={"newMessageText"} placeholder={"✎ write something..."}/>
        </div>
        <div>
            <button>send</button>
        </div>

    </form>
}
const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

///----------- type -----------\\\
export type FormDataType = {
    newMessageText: string
}