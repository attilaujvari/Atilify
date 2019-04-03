import React from "react"
import "../styles/navbar.css"
import {Link} from "react-router-dom";
import LoginForm from "./forms/LoginForm";

const Navbar = (props) => {
    return(
        <nav className={"nav"}>
            <div className={"navLeft navAll"}>
                <Link to={"/"}>Dashboard</Link>
            </div>
            {props.token
                ?   <div className={"navRight navAll"}>
                    <div onClick={props.logout}>Logout</div>
                </div>
                :   <div className={"navRight navAll"}>
                    <Link to={"/signup"}>Sign Up</Link>
                    <LoginForm login={props.login}/>
                </div>
            }
        </nav>
    )
}

export default Navbar