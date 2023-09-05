const Task = require('../models/Tasks')

const getAllTasks =async (req,res)=>{
    // res.send('All Tasks')
    
    try {
        const tasks = await Task.find({})
    // res.status(200).json(await task.find({}))
        res.status(200).json({tasks})
        
    } catch (error) {
        res.status(500).json({msg:error})
    }

}

const createNewTask = async (req,res)=>{
    try {
        const singleTask = await Task.create(req.body)
        res.status(201).json({singleTask})
    } catch (error) {
        res.status(500).json({msg:error})
        
    }
    
}

const getSingleTask = async (req,res)=>{
    // 
    
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID})
        // const singleTask = await task.findOne({_id:req.params.id}).exec()
        if( !task ){
            return res.status(404).json({msg:`No task with id: ${taskId}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }
}
// const getSingleTask = async (req, res) => {
//     try {
//         const { id: taskId } = req.params;
//         const singleTask = await task.findOne({ _id: taskId });

//         if (!singleTask) {
//             return res.status(404).json({ msg: `No task with id: ${taskId}` });
//         }

//         res.status(200).json({ singleTask });
//     } catch (error) {
//         res.status(500).json({ msg: error.message }); // Use error.message to get the error message
//     }
// }


const updateTask = async (req,res)=>{
    
    try {
        
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            runValidators:true,
        })
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error.message})
        
    }
}

const deleteTask = async (req,res)=>{
    try {
        const {id:taskId} = req.params;
        // const deletedTask = await task.deleteOne({_id:taskId});
        const deletedTask = await Task.findOneAndDelete({_id:taskId})
        if( !deletedTask ){
            return res.status(404).json({msg:`No task with id: ${taskId}`})
        }
        res.status(200).json({deletedTask});
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
    // res.send('Task Deleted')
}


module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask
}