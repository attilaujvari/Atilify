const express = require("express")
const postRouter = express.Router()
const Post = require("../models/post.js")

//  This is past our API, so we have Auth, thus req.user._id
// POST - Add new Post
postRouter.post("/", (req, res, next) => {
    const newPost = new Post(req.body)
    newPost.user = req.user._id
    newPost.save((err, newPost) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newPost)
    })
})

module.exports = postRouter