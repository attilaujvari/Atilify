const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")
// Sets up the ability to use a .env file for private environment variables (SECRET)
require("dotenv").config()
const PORT = process.env.PORT || 6969

//  Middlewares that fire on every request
app.use(express.json())   //parses objects so we get req.body
app.use(morgan("dev"))

// DB Connect
mongoose.connect("mongodb://localhost:27017/atilify",
    {useNewUrlParser: true},
    () => {console.log("[o] Connected to the DB")
})

// Routes
app.use("/public", require("./routes/publicRouter.js"))
app.use("/auth", require('./routes/authRouter.js'))
//  Security checkpoint - checking if secret in JWT matches our .env secret
app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use("/api/todo", require('./routes/todoRouter.js'))
app.use("/api/posts", require("./routes/postRouter.js"))

// Global Server Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    //  this is the expressJWT error
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

// Server setup
app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})