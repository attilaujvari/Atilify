const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
    },
    summary: String,
    details: {
        type: String
    },
    // Incorporate Google Maps to location
    location: {
      type: String
    },
    dueOn:{
      type: Date
    },
    reminderDate: {
        type: Date
    },
    reminderTime: {
        type: String
    },
    recurrence: {
        type: Boolean
    },
    //  Every how many
    recurrenceInterval: {
        type: Number
    },
    //  Every other? 2 Every third? 3
    recurrenceDenominator: {
        type: Number
    },
    recurrencePeriod: {
        type: String,
        enum: ["day","week","month","year"]
    },
    priority: {
        type: String,
        enum: ["low","medium","high"],
        default: "medium"
    },
    timestamps: true,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Post", todoSchema)