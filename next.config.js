const username = process.env['USERNAME']
const password = process.env['PASSWORD']
const BASE_URL = process.env['BASE_URL'] || 'http://localhost:8000'

const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64')

module.exports = (phase, { defaultConfig }) => {
  return {
    serverRuntimeConfig: {
      BASE_URL
    },

    publicRuntimeConfig: {
      auth,
      BASE_URL
    }

    // webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    //   config.module.rules.push({
    //     test: /\.js$/,
    //     enforce: 'pre',
    //     exclude: [/node_modules/, '/.next'],
    //     loader: 'eslint-loader',
    //     options: {
    //       emitError: false,
    //       emitWarning: true,
    //       failOnWarning: false
    //     }
    //   })

    //   return config
    // }
  }
}
