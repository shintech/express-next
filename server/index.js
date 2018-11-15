const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')

const Router = require('./router')

module.exports = ({ logger }) => {
  const server = express()

  const api = Router({ })

  server.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(compression())

    .use('/api', (req, res, next) => {
      res.on('finish', () => {
        logger.info(`${res.statusCode} - ${req.method} - ${req.url}`)
      })

      req.logger = logger
      next()
    })

    .use('/api', api)

  return server
}
