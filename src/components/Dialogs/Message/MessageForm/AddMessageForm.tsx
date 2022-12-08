import React from "react";
import {FormDataType} from "../../Dialogs";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/FormsControls/FormsControls";
import {maxLengthTC, required} from "../../../../utils/validators/validators";

const maxLength50 = maxLengthTC(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"newMessageText"} placeholder={"✎ write something..."}
                   validate={[required, maxLength50]}/>
        </div>
        <div>
            <button>send</button>
        </div>

    </form>
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)