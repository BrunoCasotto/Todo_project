const express = require('express')
const User = require('../db/models/user')
const tokenValidate = require('./../middlewares/tokenValidate')

const router = express.Router()

router.get('/all', tokenValidate, async (req, res) => {
  try {
    const { userId } = req
    const user = await User
      .findOne({ _id: userId.id })
      .select('tasks')

    return res.send({ tasks: user.tasks })
  } catch (error) {
    console.error('taskController::getAll', { error })
    return res.status(401).send({ error: 'Error on get tasks'})
  }
})

module.exports = app => app.use('/task', router)