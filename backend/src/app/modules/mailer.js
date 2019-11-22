const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const path = require('path')

const { host, port, user, pass } = require('./../../config/mail')

const transport = nodemailer.createTransport({
  host, port, auth: { user, pass }
})

const viewPath = path.resolve('src', 'resources', 'mail')

transport.use('compile', hbs({
  viewEngine: exphbs.create({
    layoutsDir: path.resolve(viewPath, 'layouts'),
    partialsDir: path.resolve(viewPath, 'partials'),
    defaultLayout: 'default',
    extname: '.html',
  }),
  viewPath,
  extName: '.html',
}))

module.exports = transport
