const nextjs = require('next')
const path = require('path')
const nextRoutes = require('./routes')
const router = require('./server/router')
const createServer = require('./server')
const createLogger = require('shintech-logger')
const pkg = require('./package.json')

require('dotenv').config({
  path: path.join(__dirname, 'config', 'env', '.env'),
  systemvars: true
})

const port = parseInt(process.env['PORT']) || 8000
const environment = process.env['NODE_ENV'] || 'development'

const dev = process.env['NODE_ENV'] !== 'production'
const app = nextjs({ dev })
const handle = nextRoutes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const config = { port, environment }
    const logger = createLogger(config)

    createServer({ ...config, logger })
      .use('/api', router)
      .use((req, res) => handle(req, res))

      .listen(port)
      .on('listening', () => {
        logger.info(`loading environment -> ${process.env['NODE_ENV']}...`)
        logger.info(`${pkg.name} - version: ${pkg.version} - listening on port ${port}...`)
      })

      .on('error', (err) => {
        logger.error(err.message)

        throw new Error(err)
      })
  })
