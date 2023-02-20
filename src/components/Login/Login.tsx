import React from "react";
import { FormDataType, LoginReduxForm } from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { loginTC } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { ReduxStateType } from "../../Redux/Redux-Store";

const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginTC(formData.email, formData.password, formData.rememberMe);
    console.log(formData);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

///----------- types -----------\\\
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = {
  isAuth: boolean;
};
type mapDispatchToPropsType = {
  loginTC: (email: string, password: string, rememberMe: boolean) => void;
};

export default connect(mapStateToProps, { loginTC })(Login);
