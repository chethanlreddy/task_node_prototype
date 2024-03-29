const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema(
    {
        taskName: {
            type : String,
            required : true
        },
        taskAssignee: {
            type: String,
            required : true
        },
        taskAssigneeTo: {
            type: String,
            required : true
        },
        taskStartDate: {
            type : Date,
            required : true
        },
        taskEndDate: {
            type : Date,
            required : true
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('task', taskSchema);