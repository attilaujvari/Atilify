const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo.js')


// Add new todos for a specific user
todoRouter.post("/todo", (req, res, next) => {
    const newTodo = new Todo(req.body)
    newTodo.user = req.user._id
    newTodo.save((err, newTodo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newTodo)
    })
})

// Get all todos belonging to a specific user
todoRouter.get("/todo", (req, res, next) => {
    Todo.find({user: req.user._id}, (err, userTodos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userTodos)
    })
})

// todoRouter.put("/", (req, res, next) => {
//     if(req.user.isAdmin){
            // do awesome admin stuff...
//     } else {
//         res.status(401)
//         return next(new Error("Stooopid.."))
//     }
// })


module.exports = todoRouter