const express = require('express')
const app = express()

const port = 3000
app.use(express.static('./public'))
app.get('/hello',(req,res)=>{
    res.send('Hello there')
})

app.listen(port,()=>{
    console.log('server listening at port 3000...')
})