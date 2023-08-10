const mongoos = require('mongoose')

const taskSchema = new mongoos.Schema({
    name:String,
    completed:Boolean
})

module.exports = mongoos.model('Task',taskSchema)