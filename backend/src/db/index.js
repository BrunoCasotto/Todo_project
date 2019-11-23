const mongoose = require('mongoose')
const { dbUser, dbPassword, host, database } = require('./../config/db')

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}

const uri = `mongodb://${dbUser}:${dbPassword}@${host}/${database}`
mongoose.connect(uri, mongooseOptions)
  .catch(error => console.log('database::connect' , { error }))

mongoose.promise = global.Promise

module.exports = mongoose