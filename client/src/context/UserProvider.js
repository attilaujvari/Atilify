import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const UserProvider = props => {
    const initialState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        errMsg: ""
    }
    const [userState, setUserState] = useState(initialState)

    const signup = async credentials => {
        try{
            const response = await axios.post("/auth/signup", credentials)
            const { user, token } = response.data
            localStorage.user = JSON.stringify(user)
            localStorage.setItem("token", token)
            setUserState({
                ...userState,
                user,
                token,
            })
        }
        catch(err) {
            setUserState({ ...userState,errMsg: err.response.data.errMsg })
            }
        }

// todo redirect login below to "/"
    //todo have this prompt the data-retrieval
    const login = async credentials => {
        try{
            const response = await axios.post("/auth/login", credentials)
            const { user, token } = response.data
            localStorage.user = JSON.stringify(user)
            localStorage.setItem("token", token)
            setUserState({
                ...userState,
                user,
                token,
            })
        }
        catch(err){
            setUserState({ ...userState,errMsg: err.response.data.errMsg })
        }
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
        })
    }

    return(
        <UserContext.Provider
            value={{...userState,
            signup,
            login,
            logout}}>
        {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider