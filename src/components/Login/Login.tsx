import React from "react";
import {Field, reduxForm} from "redux-form";

export const LoginForm = () => {

    return <form>
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
export const LoginReduxForm = reduxForm({form: "login"})(LoginForm)
export const Login = () => {

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm/>
    </div>

};
