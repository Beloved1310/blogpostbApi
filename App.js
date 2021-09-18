const express = require('express')
const cors = require('cors')
require('dotenv').config()
const debug = require('debug')('app')


const app = express()

const blog = require('./routes/blog')
const user = require('./routes/user')
const comment = require('./routes/comment')
// require('./production/production')();

process.on('unhandledRejection', (err) => {
  debug(err, 'Unhandled Rejection at Promise')
  process.exit(1)
})
process.on('uncaughtException', (err) => {
  debug(err, 'Uncaught Exception thrown')
  process.exit(1)
})

app.use(cors({ origin: '*' }))

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '50mb' }))
app.use('/blog', blog)
app.use('/comment', comment)
app.use('/', user)

module.exports = app