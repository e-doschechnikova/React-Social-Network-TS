import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} component={Input} name={"login"} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={"password"} component={Input} name={"password"} validate={[required]}/>
        </div>
        <div>
            <Field type={"checkbox"} component={"input"} name={"rememberMe"}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
};

export const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

///----------- type -----------\\\
export type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}