import React from "react";
import styles from "../MyPost.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostText"} component={"textarea"} className={styles.textForm} placeholder={'write a post'}/>
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

