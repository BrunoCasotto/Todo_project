const express = require('express')
const User = require('../db/models/user')
const router = express.Router()
const bcryptjs = require('bcryptjs')

//simple method to create new users
router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body)
    user.password = undefined

    return res.send({ user })
  } catch (err) {
    console.error('AuthController::register', { err })
    res.status(400).send({ error: 'Registration failed '})
  }
})

//simple method to create new users
router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email }).select('+password')

    if(! await bcryptjs.compare(password, user.password)) {
      return res.status(401).send({ error: 'Invalid password'})
    }

    user.password = undefined
    return res.send({ user })
  } catch (err) {
    console.error('AuthController::register', { err })
    res.status(400).send({ error: 'Authentication failed'})
  }
})


module.exports = app => app.use('/auth', router)