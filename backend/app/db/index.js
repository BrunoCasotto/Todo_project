const mongoose = require('mongoose')
const dbUser = process.env.DB_USER || 'root'
const dbPassword = process.env.DB_PASSWORD || 'root'
const host = process.env.DB_HOST || 'localhost:27017'
const database = process.env.DB_DATABASE || 'todo_db'

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const uri = `mongodb://${dbUser}:${dbPassword}@${host}/${database}`
mongoose.connect(uri, mongooseOptions)
  .catch(error => console.log('mongoose::connect' , { error }))

mongoose.promise = global.Promise

module.exports = mongoose