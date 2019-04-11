import React, {useContext, useEffect, useState} from "react"
import {DataContext} from "../context/DataProvider";
import PostList from "./PostList";
import "../styles/dashboard.css"
import TodoList from "./TodoList";

const Dashboard = () => {
    const {allPosts, getData, userTodos} = useContext(DataContext)

    useEffect( () => {
        getData()
    }, [])

    // console.log(userTodos)

    return(
        <div className={"dashboardContainer"}>
            <PostList posts={allPosts}/>
            <TodoList todos={userTodos}/>
        </div>
    )
}

export default Dashboard