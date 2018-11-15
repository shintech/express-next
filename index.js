const nextjs = require('next')
const nextRoutes = require('./routes')
const router = require('./server/router')
const createServer = require('./server')
const createLogger = require('shintech-logger')
const pkg = require('./package.json')

const port = parseInt(process.env['PORT']) || 8000
const environment = process.env['NODE_ENV'] || 'development'

const dev = process.env['NODE_ENV'] !== 'production'
const app = nextjs({ dev })
const handle = nextRoutes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const config = { port, environment }
    const logger = createLogger(config)
    const server = createServer({ ...config, logger })

    server.use('/api', router)
    server.use((req, res) => handle(req, res))

    server.listen(port, () => {
      logger.info(`${pkg.name} - version: ${pkg.version} - listening on port ${port}...`)
    })
  })
