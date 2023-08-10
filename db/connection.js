const mongoos = require('mongoose')
const connectionString = 'mongodb+srv://abhi:mongodb..abhi@cluster0.htgjrby.mongodb.net/Task-Manager?retryWrites=true&w=majority'

mongoos.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
    .then(()=>{
        console.log('connected to db...')
    })
    .catch((err)=>{
        console.log(err)
    })