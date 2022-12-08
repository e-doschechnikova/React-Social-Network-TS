import React from "react";
import style from "./FormsControls.module.css"
import {WrappedFieldProps} from "redux-form";

const FormControl = ({meta, isError, children}: FormControlsPropsType) => {

    return <>
        <div>{children}</div>
        {isError && <span className={style.someError}>{meta.error}</span>}
    </>

}

export const Textarea = (props: FormControlsPropsType) => {
    const isError = {isError: props.meta.touched && props.meta.error}
    return <FormControl {...props} {...isError} >
        <textarea {...props.input} {...props} className={isError.isError ? style.errorInput : ""}/>
    </FormControl>
}
export const Input = (props: FormControlsPropsType) => {
    const isError = {isError: props.meta.touched && props.meta.error}
    return <FormControl {...props} {...isError}>
        <input  {...props.input} type={props.type} className={isError.isError ? style.errorInput : ""}/>
    </FormControl>
}

///----------- type -----------\\\
type FormControlsPropsType = {
    type: string
    children: React.ReactNode
    isError: boolean
} & WrappedFieldProps