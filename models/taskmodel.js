const mongo = require('mongoose')


const taskSchema = mongo.Schema(
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

const taskModel = mongo.model('task', taskSchema);
module.exports = taskModel;