import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import path from 'path'

configure({ adapter: new Adapter() })

const environment = 'test'

global.process.env = {
  NODE_ENV: environment,
  BASE_URL: 'http://localhost:8000',
  PORT: 8000,
  HOST: 'localhost'
}

const logger = require('shintech-logger')({ environment })

global._server = require(path.join('..', '..', 'server'))({ logger })

global.React = React

global._treesMock = {
  value: 0,
  message: 'ok'
}
