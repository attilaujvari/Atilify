import React, {useContext} from "react"
import {UserContext} from "../context/UserProvider";
import SignupForm from "./forms/SignupForm";

const Signup = () => {
    const {signup, user, token, errMsg} = useContext(UserContext)
    return(
        <div>
            This is the top of the signup page
            <SignupForm />
            This is the bottom of the signup page
        </div>
    )
}

export default Signup