import React, {useContext} from "react"
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import {Route, Switch} from "react-router";
import "./styles/style.css"
import {UserContext} from "./context/UserProvider";
import Signup from "./components/Signup";

const App = () => {
    const {signup, login, logout, user, token, errMsg} = useContext(UserContext)
    return (
        <div>
            <Navbar logout={logout} token={token} login={login}/>
            <Switch>
                 <Route exact path={"/"} component={Dashboard}/>
                 <Route path={"/signup"} render={rProps => <Signup {...rProps} signup={signup} />}/>
            </Switch>
        </div>
    )
}

export default App