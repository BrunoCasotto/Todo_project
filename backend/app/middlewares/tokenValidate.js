const jwt = require('jsonwebtoken')
const { secret } = require('./../config/auth')

//middleware to verify user token on requests
module.exports = (req, res, next) => {
  const authHeaders = req.headers.authorization

  if (!authHeaders)
    return res.status(401).send({ error: 'No token provided'})

  const tokenParts = authHeaders.split(' ')

  if (!tokenParts.length ===2)
    return res.status(401).send({ error: 'Token error'})

  const [scheme, token] = tokenParts

  if (!/ˆBearer$/i.test(scheme))
    return res.status(401).send({ error: 'Token malformatted'})

  jwt.verify(token, secret, (error, decoded) => {
    if (error)
      return res.status(401).send({ error: 'Token invalid'})

    req.userId = decoded
    return next()
  })
}
