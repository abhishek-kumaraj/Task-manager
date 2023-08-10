const mongoos = require('mongoose')

const mongoDb = (url)=>{
    return mongoos.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
}

module.exports = mongoDb


