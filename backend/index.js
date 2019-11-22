const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000
const app = express()

const start = () => {
  // config body parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  //register controllers
  require('./src/app/controllers/index')(app);

  //listen server
  app.listen(port)
  console.log(`Server listening on http://localhost:${port}`)
}

start()
