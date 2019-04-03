import React from "react"
import SignupForm from "./forms/SignupForm";

const Signup = (props) => {

    return(
        <div>
            This is the top of the signup page
            <SignupForm signup={props.signup}/>
            This is the bottom of the signup page
        </div>
    )
}

export default Signup