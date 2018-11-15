const express = require('express')

const trees = require('./routes/trees')
const about = require('./routes/about')

const router = express.Router()

module.exports = function (options) {
  router.get('/state', (req, res) =>
    res.status(200).json({
      status: 'ok'
    })
  )

  router.route('/trees')
    .get(trees.fetch)

  router.route('/about')
    .get(about.fetch)

  return router
}
