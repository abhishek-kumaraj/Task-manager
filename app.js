const express = require('express')
const app = express()
const task = require('./routes/tasks')

const mongoDB = require('./db/connection')
require('dotenv').config() // loads the environment variable defined in .env file into process.env object
app.use(express.json()) // build in middleware funciton to parse incoming JSON data form the request body
app.use(express.static('./public'))
// app.get('/hello',(req,res)=>{
//     res.send('Hello there')
// })

// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
app.use('/api/v1/tasks',task) // mount the router on the app

app.use(express.static('./public'))
// app.get('/api/v1/tasks/:id') - get info about a task
// app.patch('/api/v1/tasks/:id') - update  task
// app.delete('/api/v1/tasks/:id') - delete a task

const start = async()=>{
    try {
        await mongoDB(process.env.MONGO_URI)
        app.listen(5000,()=>{
            console.log('server listening at port 5000...')
        })
    } catch (error) {
        console.log(error)
    }

}

start()

