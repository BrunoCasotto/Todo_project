const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const { host, port, user, pass } = require('./../../config/mail')

const transport = nodemailer.createTransport({
  host, port, auth: { user, pass }
})

const viewPath = path.resolve('src', 'resources', 'mail')
const nodemailerConfig = {
  viewEngine: {
    extname: '.hbs',
    layoutsDir: viewPath,
    defaultLayout: 'default',
    partialsDir: path.join(viewPath, 'partials'),
  },
  viewPath,
  extName: '.hbs',
}

transport.use('compile', hbs(nodemailerConfig))

module.exports = transport
