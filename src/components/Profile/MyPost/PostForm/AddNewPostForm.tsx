import React from "react";
import styles from "../MyPost.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthTC, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthTC(10)

export const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostText"} component={Textarea} className={styles.textForm} placeholder={'write a post'}
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>add post</button>
        </div>
    </form>
}

export const AddNewPostFormRedux = reduxForm<FormDataType>({
    form: 'profileAddPostReduxForm'
})(AddNewPostForm)

///----------- type -----------\\\
export type FormDataType = {
    newPostText: string
}

