import React, {useContext} from "react"
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import {Redirect, Route, Switch} from "react-router";
import "./styles/style.css"
import {UserContext} from "./context/UserProvider";
import Signup from "./components/Signup";
import ProtectedRoute from "./shared/ProtectedRoute"

const App = () => {
    const {signup, login, logout, user, token, errMsg} = useContext(UserContext)
    return (
        <div>
            <Navbar logout={logout} token={token} login={login}/>

            <Switch>
                <Route
                    path={"/signup"}
                    render={rProps =>
                        token
                    ? <Redirect to={"/home"}/>
                    : <Signup {...rProps} signup={signup}/>}/>
                <ProtectedRoute
                    token={token}
                    path={"/home"}
                    redirectTo={"/"}
                    component={Dashboard}/>
            </Switch>
        </div>
    )
}

export default App