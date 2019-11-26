const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const express = require('express')
const jwt = require('jsonwebtoken')
const mailer = require('./../modules/mailer')
const User = require('./../models/user')
const { secret } = require('./../../config/auth')
const tokenValidate = require('./../middlewares/tokenValidate')

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

//simple method to get user
router.get('/user', tokenValidate, async (req, res) => {
  const { userId } = req
  try {
    const user = await User.findById(userId).select('-tasks')

    return res.send({ user })
  } catch (err) {
    console.error('AuthController::getUser', { err })
    res.status(400).send({ error: 'getUser failed'})
  }
})

//simple method to generate a token to password reset and send to email
router.post('/forgot_password', async (req, res) => {
  const { email } = req.body
  try {
    const user = await User.findOne( { email })

    if(!user)
      return res.status(400).send({ error: 'User not found'})

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
      subject: '👻 Password reset ✔',
      template: 'auth/forgot_password',
      context: {
        token,
      },
    })

    return res.send({ response })
  } catch (err) {
    console.error('AuthController::forgot_password', { err })
    return res.status(400).send({ error: 'Forgot password failed'})
  }
})

//simple method to authenticate user by email and password
router.post('/reset_password', async (req, res) => {
  const { token, password, email } = req.body
  try {
    const user = await User.findOne( { email })
      .select('+passwordResetToken passwordResetExpiress')

    if(!user)
      return res.status(400).send({ error: 'User not found'})

    if(token !== user.passwordResetToken)
      return res.status(400).send({ error: 'Invalid token'})

    const now = new Date()
    if(now > user.passwordResetExpiress)
      res.status(400).send({ error: 'Expired token'})

    user.password = password
    await user.save()

    return res.send()
  } catch (err) {
    console.error('AuthController::reset_password', { err })
    return res.status(400).send({ error: 'Reset password failed'})
  }
})


module.exports = router