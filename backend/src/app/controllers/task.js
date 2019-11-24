const express = require('express')
const User = require('./../models/user')
const tokenValidate = require('./../middlewares/tokenValidate')

const router = express.Router()

//method to get all tasks
router.get('/all', tokenValidate, async (req, res) => {
  try {
    const { userId } = req
    const user = await User.findById(userId.id).select('tasks')

    return res.send({ tasks: user.tasks })
  } catch (error) {
    console.error('taskController::getAll', { error })
    return res.status(401).send({ error: 'Error on get tasks'})
  }
})

//method to create a new task
router.post('/save', tokenValidate, async (req, res) => {
  try {
    const { userId, body } = req
    const user = await User
      .findOneAndUpdate({ _id: userId.id }, {
        $push: { tasks: body }
      }, { new: true })

    return res.send({ tasks: user.tasks })
  } catch (error) {
    console.error('taskController::save', { error })
    return res.status(401).send({ error: 'Error on save tasks'})
  }
})

//method to delete specific task
router.delete('/remove/:taskId', tokenValidate, async (req, res) => {
  try {
    const { userId, params } = req
    const { taskId } = params

    const user = await User
      .findOneAndUpdate({ _id: userId.id }, {
        $pull: {
          tasks: {
            _id: taskId
          }
        }
      }, { new: true })

    return res.send({ tasks: user.tasks })
  } catch (error) {
    console.error('taskController::remove', { error })
    return res.status(401).send({ error: 'Error on remove task'})
  }
})

//method to update and especific task
router.put('/update/:taskId', tokenValidate, async (req, res) => {
  try {
    const { userId, body, params } = req
    const { taskId } = params

    const user = await User.updateOne(
      { _id: userId.id, 'tasks._id': taskId },
      { $set: { "tasks.$" : body } },
      { runValidators: true }
    )

    return res.send({ user })
  } catch (error) {
    console.error('taskController::update', { error })
    console.log(error)
    return res.status(401).send({ error: 'Error on update task' })
  }
})

module.exports = router