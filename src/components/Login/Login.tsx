import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} component={"input"} name={"login"}/>
        </div>
        <div>
            <Field placeholder={"password"} component={"input"} name={"password"}/>
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
export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

};

///----------- type -----------\\\
type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}