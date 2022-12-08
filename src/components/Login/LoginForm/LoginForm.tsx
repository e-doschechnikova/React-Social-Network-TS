import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../Common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"email"} component={Input} name={"email"} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={"password"} component={Input} name={"password"} validate={[required]} type={"password"}/>
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
    email: string,
    password: string,
    rememberMe: boolean
}