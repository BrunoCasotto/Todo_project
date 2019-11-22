const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const express = require('express')
const jwt = require('jsonwebtoken')
const mailer = require('./../modules/mailer')

const User = require('./../models/user')
const { secret } = require('./../../config/auth')

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

//simple method to authenticate user by email and password
router.post('/forgot_password', async (req, res) => {
  const { email } = req.body
  try {
    const user = await User.findOne( { email })

    if(!user)
      res.status(400).send({ error: 'User not found'})

    const token  = crypto.randomBytes(20).toString('hex')
    const now = new Date()
    now.setHours(now.getHours() + 1)

    await User.findOneAndUpdate(user.id, {
      $set: {
        passwordResetToken: token,
        passwordResetExpiress: now
      }
    })

    const response = await mailer.sendMail({
      from: '"Todo" <todo@noreply.com>',
      to: email,
      subject: "👻 Password reset ✔",
      text: "Hello world?",
      // html: "<b>Hello world?</b>"
      // // template: 'auth/forgot_password',
      // subject:'TODO - Recuperação de senha',
      // // context: {
      // //   token,
      // // },
      // html: "<b>Hello world?</b>"
    })

    return res.send({ response })
  } catch (err) {
    console.error('AuthController::forgot_password', { err })
    res.status(400).send({ error: 'Forgot password failed'})
  }
})


module.exports = router