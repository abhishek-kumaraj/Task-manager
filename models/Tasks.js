const mongoos = require('mongoose')

const taskSchema = new mongoos.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
        maxlength:20
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoos.model('Task',taskSchema)