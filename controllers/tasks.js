const task = require('../models/Tasks')

const getAllTasks = (req,res)=>{
    res.send('All Tasks')
}

const createNewTask = async(req,res)=>{
    const singleTask = await task.create(req.body)
    res.status(201).json({singleTask})
}

const getSingleTask = (req,res)=>{
    res.json({id:req.params.id,name:'task name'})
}

const updateTask = (req,res)=>{
    res.send('Updated Task')
}

const deleteTask = (req,res)=>{
    res.send('Task Deleted')
}


module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask
}