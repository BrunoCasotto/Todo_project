//nodemailer configs
module.exports = {
  host: process.env.MAILER_HOST || 'smtp.gmail.com',
  port: process.env.MAILER_PORT || 587,
  user: process.env.MAILER_USER || 'youremail@gmail.com',
  pass: process.env.MAILER_PASS || 'password',
}
