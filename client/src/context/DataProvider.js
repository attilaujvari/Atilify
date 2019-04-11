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
        errMsg: "",
        allPosts : [],
        userTodos: []
    }
    const [data, setData] = useState(initialState)

    //GET ALL posts of ALL users
    //GET ALL todos of ONE user
    const getData = async () => {
        try {
            const resPosts = await dataAxios.get("/api/posts")
            const resTodos = await dataAxios.get("/api/todo")
            setData({
                ...data,
                allPosts: resPosts.data,
                userTodos: resTodos.data
            })
        }
        catch (e) {
            setData({...data, errMsg: e.response.data.errMsg})
        }
    }

    return(
        <DataContext.Provider
            value={{
                ...data,
                getData
            }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider