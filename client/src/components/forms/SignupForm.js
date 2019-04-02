import React from "react"
import {useFormProperties} from "../../shared/customHooks";

const SignupForm = props => {
    console.log(props)
    const {handleChange, handleSubmit} = useFormProperties()

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value="username"
                onChange={handleChange}
                placeholder="Username"
                required/>
            <input
                type="text"
                name="password"
                value="password"
                onChange={handleChange}
                placeholder="Password"
                required/>
            <input
                type="text"
                name="password"
                value="password"
                onChange={handleChange}
                placeholder="Password"
                required/>
            <button>Sign Up</button>
        </form>
    )
}

export default SignupForm