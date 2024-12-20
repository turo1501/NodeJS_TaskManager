const express = require("express")
const router = express.Router()
const Task = require("../models/Tasks")

const {getAllTasks , createTask , getTask , updateTask,deleteTask} = require('../controllers/tasks')

const port = 3000

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
