require('./db/connect') 
require('dotenv').config()
const express = require("express")
const app = express()
const task = require("./router/tasks")
const connectDB = require('./db/connect')
const port  = 3000
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())


app.use(express.static('./public'))
app.use('/api/v1/tasks', task)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start= async() =>{
    try{
        await(connectDB(process.env.MONGO_URI))
        app.listen(port , console.log('server listion from port ${port}'))
    }catch(error){
        console.log(error)
    }
}
start()


