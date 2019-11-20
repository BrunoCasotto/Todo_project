const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', {
  useMongoClient: true
})

mongoose.promise = global.Promise

module.exports = mongoose