import React from "react"
import "../styles/navbar.css"
import {Link} from "react-router-dom";
import LoginForm from "./forms/LoginForm";
import {useToggle} from "../shared/customHooks";

const Navbar = props => {
    const {toggle, toggler, setToggle} = useToggle(true)
    return(
        <nav className={"nav"}>
            <div className={"navLeft navAll"}>
                <Link to={"/home"} onClick={()=>setToggle(true)}>Dashboard</Link>
            </div>
            {props.token
                ?   <div className={"navRight navAll"}>
                    <div onClick={() => {
                        props.logout()
                        setToggle(false)
                    }}>Logout</div>
                </div>
                :   <div className={"navRight navAll"}>
                    <Link to={"/signup"} onClick={()=>setToggle(true)}>Sign Up</Link>

                        {toggle
                            ? <div onClick={toggler}>Login</div>
                            : <div><LoginForm login={props.login}/></div>
                        }

                </div>
            }
        </nav>
    )
}

export default Navbar