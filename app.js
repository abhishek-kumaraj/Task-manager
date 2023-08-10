require('./db/connection')
const express = require('express')
const app = express()
const task = require('./routes/tasks')
app.use(express.json())
app.use(express.static('./public'))
app.get('/hello',(req,res)=>{
    res.send('Hello there')
})

// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
app.use('/api/v1/tasks',task)


// app.get('/api/v1/tasks/:id') - get info about a task
// app.patch('/api/v1/tasks/:id') - update  task
// app.delete('/api/v1/tasks/:id') - delete a task



app.listen(5000,()=>{
    console.log('server listening at port 5000...')
})