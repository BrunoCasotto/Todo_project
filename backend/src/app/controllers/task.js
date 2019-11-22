const express = require('express')
const User = require('../db/models/user')
const tokenValidate = require('./../middlewares/tokenValidate')

const router = express.Router()

//method to get all tasks from userId
const getTasksByUserId = async userId => {
  const user = await User
    .findOne({ _id: userId })
    .select('tasks')

  return user.tasks
}

//method to get all tasks
router.get('/all', tokenValidate, async (req, res) => {
  try {
    const { userId } = req
    const tasks = await getTasksByUserId(userId.id)

    return res.send({ tasks })
  } catch (error) {
    console.error('taskController::getAll', { error })
    return res.status(401).send({ error: 'Error on get tasks'})
  }
})

//method to create a new task
router.post('/save', tokenValidate, async (req, res) => {
  try {
    const { userId, body } = req
    await User.findOneAndUpdate({ _id: userId.id }, {
        $push: { tasks: body }
      })

    const tasks = await getTasksByUserId(userId.id)

    return res.send({ tasks })
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
      })

    const tasks = await getTasksByUserId(userId.id)
    return res.send({ tasks })
  } catch (error) {
    console.error('taskController::remove', { error })
    return res.status(401).send({ error: 'Error on remove task'})
  }
})

module.exports = router