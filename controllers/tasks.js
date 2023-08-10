const getAllTasks = (req,res)=>{
    res.send('All Tasks')
}

const createNewTask = (req,res)=>{
    res.send('new Task created')
}

const getSingleTask = (req,res)=>{
    res.send('Task')
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