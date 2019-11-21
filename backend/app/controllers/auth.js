const bcryptjs = require('bcryptjs')
const express = require('express')
const jwt = require('jsonwebtoken')

const User = require('../db/models/user')
const { secret } = require('./../config/auth')

const router = express.Router()

// function to generate user token by user id
const generateToken = id => {
  const token = jwt.sign({ id }, secret, {
    expiresIn: 86400, //one day
  })

  return token
}

//simple method to create new users
router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body)
    user.password = undefined

    const token = generateToken(user.id)
    return res.send({ user, token })
  } catch (err) {
    console.error('AuthController::register', { err })
    res.status(400).send({ error: 'Registration failed '})
  }
})

//simple method to authenticate user by email and password
router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email }).select('+password -tasks')

    if(! await bcryptjs.compare(password, user.password)) {
      return res.status(401).send({ error: 'Invalid password'})
    }

    user.password = undefined

    const token = generateToken(user.id)
    return res.send({ user, token })
  } catch (err) {
    console.error('AuthController::register', { err })
    res.status(400).send({ error: 'Authentication failed'})
  }
})


module.exports = router