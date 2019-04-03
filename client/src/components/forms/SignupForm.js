import React from "react"
import {useFormProperties} from "../../shared/customHooks";

const SignupForm = (props) => {
    const initInput = {username:"",password:""}
    const {handleChange, handleSubmit, inputs} =
        useFormProperties(initInput,props.signup)
// todo add validation for password field below
    return(
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
            <button>Sign Up</button>
        </form>
    )
}

export default SignupForm