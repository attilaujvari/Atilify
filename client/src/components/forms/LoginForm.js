import React from "react";
import {useFormProperties} from "../../shared/customHooks";

const LoginForm = (props) => {
    const initInput = {username: "", password: ""}
    const {handleChange, handleSubmit, inputs} =
        useFormProperties(initInput, props.login)
    return (
        <div className={"navLoginContainer"}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required/>
                <input
                    type="text"
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default LoginForm