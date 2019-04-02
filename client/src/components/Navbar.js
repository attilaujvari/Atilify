import React from "react"
import "../styles/navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={"nav"}>
            <div className={"navLeft navAll"}>
                <Link to={"/"}>Dashboard</Link>
            </div>
            <div className={"navRight navAll"}>
                <Link to={"/signup"}>Sign Up</Link>
                <div>Login</div>
            </div>
        </nav>
    )
}

export default Navbar