const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: String,
    summary: String,
    details: String,
    // Incorporate Google Maps to location
    location: String,
    dueOn: Date,
    reminderDate: Date,
    reminderTime: String,
    recurrence: Boolean,
    //  Every how many
    recurrenceInterval: Number,
    //  Every other? 2 Every third? 3
    recurrenceDenominator: Number,
    recurrencePeriod: {
        type: String,
        enum: ["day","week","month","year"]
    },
    priority: {
        type: String,
        enum: ["low","medium","high"],
        default: "medium"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Todo", todoSchema)