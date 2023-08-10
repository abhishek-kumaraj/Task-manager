const getAllTasks = (req,res)=>{
    res.send('All Tasks')
}

const createNewTask = (req,res)=>{
    res.json(req.body)
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