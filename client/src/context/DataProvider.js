import React, {useState} from "react"
import axios from "axios"

export const DataContext = React.createContext()
const dataAxios = axios.create()

dataAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const DataProvider = props => {
    const initialState = {

    }
    const [userState, setUserState] = useState(initialState)



    return(
        <DataContext.Provider
            value={{

        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider