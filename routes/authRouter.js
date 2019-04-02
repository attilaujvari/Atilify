const express = require('express')
const User = require('../models/user.js')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

// .withoutPassword comes from the User object from user.js so that the User is sent to the frontend always w/o an encrypted password

// signup POST     /auth/signup
authRouter.post("/signup", (req, res, next) => {
    // Does a user by the submitted username already exists
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        // Does a user already exist
        if(user){
            res.status(400)
            return next(new Error("That username already exists. \n " +
                "Please select an alternative"))
        }
        // Create the user, then send the user object and JWT token to the front-end
        const newUser = new User(req.body)
        //  the below line references the pre-save hook in user.js to save their password encrypted. Then .save is executed
        newUser.save((err, savedUser) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            // Creates the token using jwt.sign().  We give the user as an object
            // for the token payload, and use our private environment SECRET
            // for the signature
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({user: savedUser.withoutPassword(), token})
        })
    })
})

// login POST     /auth/login
authRouter.post("/login", (req, res, next) => {
    //  Find user by username
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        // If the user with the given username does not exist
        if(!user){
            res.status(403)
            return next(new Error("Username or Password are incorrect"))
        }

        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            // Did the bcrypt.compare find a matched password?
            if(!isMatch){
                res.status(401)
                return next(new Error("Username or password are incorrect"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({user: user.withoutPassword(), token})
        })
    })
})


module.exports = authRouter