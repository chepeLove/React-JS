import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                        validate={[required]}
                       name={"login"}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       validate={[required]}
                       name={"password"}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={"Remember me"} /> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form:"login"
})(LoginForm)

const onSubmit =(formData)=>{
    console.log(formData)
}

const Login =(props)=>{
    const onSubmit =(formData)=>{
        console.log(formData)
    }

    return <>
        <h1>Log in</h1>
        <LoginReduxForm onSubmit = {onSubmit}/>
    </>
}


export default Login