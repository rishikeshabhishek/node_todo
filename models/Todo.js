const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = Schema({
    task: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
})

const TodoModel = new mongoose.model("todo", TodoSchema);
module.exports = TodoModel;