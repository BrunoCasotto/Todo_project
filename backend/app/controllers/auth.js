const express = require('express')
const User = require('../db/models/user')
const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body)

    return res.send({ user })
  } catch (err) {
    console.error('AuthController::register', { err })
    res.status(400).send({ error: 'Registration failed '})
  }
})


module.exports = app => app.use('/auth', router)