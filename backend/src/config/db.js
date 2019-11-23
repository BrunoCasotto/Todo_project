module.exports = {
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || 'root',
  host: process.env.DB_HOST || 'localhost:27017',
  database: process.env.DB_DATABASE || 'todo_db',
}