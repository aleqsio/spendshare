import path from 'path'

import development from './env/development'
import test from './env/test'
import production from './env/production'
const defaults = {
  root: path.normalize(__dirname + '/..'),
}

export default {
  development: Object.assign({}, development, defaults),
  test: Object.assign({}, test, defaults),
  production: Object.assign({}, production, defaults),
}[process.env.NODE_ENV || 'development']
