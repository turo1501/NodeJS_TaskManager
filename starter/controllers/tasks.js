const Task = require('../models/Tasks')
const asyncWrapper = require('../middleware/async')
const{createCustomError} = require('../error/customer-error')


const getAllTasks = asyncWrapper (async(req,res)=>{
    
        const tasks = await Task.find({})
        res.status(201).json({tasks})
    
})


const createTask = asyncWrapper(async(req,res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    
})

const getTask = asyncWrapper(async (req,res)=>{
        const {id : taskID} = req.params 
        const task = await Task.findOne({_id:taskID})
        res.status(201).json({task })
        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
})


const updateTask = asyncWrapper(async (req,res)=>{
        const {id : taskID} = req.params 
        const task = await Task.findOneAndUpdate({_id:taskID }, req.body ,{
            new:true,
            runValidators : true 
        })
        res.status(201).json({task})
        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
          }
        


})


const deleteTask = asyncWrapper(async(req,res)=>{
        const {id : taskID} = req.params 
        const task = await Task.findOneAndDelete({_id:taskID })
        res.status(201).json({msg:'success'})
        if(!task){
            return res.status(400).json({msg : ' to delete'})
        }
    
})
module.exports = {
    getAllTasks , createTask , getTask , updateTask, deleteTask
}