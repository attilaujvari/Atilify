import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()
// const dataAxios = axios.create()
//
// dataAxios.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token")
//     config.headers.Authorization = `Bearer ${token}`
//     return config
// })

const UserProvider = (props) => {
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

    const login = credentials => {
        return axios.post("/auth/login", credentials)
            .then(response => {
                const { user, token } = response.data
                localStorage.user = JSON.stringify(user)
                localStorage.setItem("token", token)
                setUserState({
                    ...userState,
                    user,
                    token,
                })
            })
            .catch(err => setUserState({ ...userState,errMsg: err.response.data.errMsg }))
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