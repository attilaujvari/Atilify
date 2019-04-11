import React from "react"
import Todo from "./Todo"
import "../styles/todos.css"

const TodoList = props => {
    return(
        <div className={"todoList"}>
            {props.todos.map(todo =>
                <Todo
                    {...todo}
                    key={todo._id}
                />
            )}
        </div>
    )
}

export default TodoList