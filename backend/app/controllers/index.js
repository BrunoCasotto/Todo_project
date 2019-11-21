const authController = require('./auth')
const taskController = require('./task')

module.exports = app => {
  app.use('/auth', authController)
  app.use('/task', taskController)
}