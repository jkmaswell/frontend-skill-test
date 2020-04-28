process.env.BABEL_CONFIG = process.env.BABEL_CONFIG || 'server'
require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime'],
})

const express = require('express')
const { default: config } = require('./server/config')
const routes = require('./server/routes')

const { httpPort, envName } = config.get()
const app = express()

app.use('/', routes.default)

app.listen(httpPort, () => {
  console.log(`Running on port ${httpPort}...`)
  console.log(`Environment: ${process.env.NODE_ENV}`)
  console.log(`Config Environment Name: ${envName}`) // sanity check
})
