const mongoose = require('../../db')
const bcryptjs = require('bcryptjs')

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpiress: {
    type: String,
    select: false,
  },
  tasks: [TaskSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// hash the password before save user
UserSchema.pre('save', async function(next) {
  const hash = await bcryptjs.hash(this.password, 10)
  this.password = hash

  next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User