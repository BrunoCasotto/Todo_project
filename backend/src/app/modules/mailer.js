const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const { host, port, user, pass } = require('./../config/email')

const transport = nodemailer.createTransport({
  host, port, auth: { user, pass }
})

transport.use('compile', hbs({
  viewEngine: 'handlebars',
  extName: '.html',
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.html',
}))
module.exports = transport
