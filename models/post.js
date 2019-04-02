const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: String,
    imgUrl: {
        type: String,
        default: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    votes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    thread: {
        type: String,
        enum: ["news", "entertainment", "sports", "culture", "science", "recipes", "arts", "awhcute", "hobbies", "politics", "music", "weather"]
    },
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        comment: {
            type: String,
        },
        timeStamp: {
            type: Date,
            default: Date.now
        }
    }],
    timeStamp: {
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String,
        default: []
    }]
})

module.exports = mongoose.model("Post", postSchema)