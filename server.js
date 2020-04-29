process.env.BABEL_CONFIG = process.env.BABEL_CONFIG || 'server'
require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime'],
})

const express = require('express')
const routes = require('./server/routes')

const app = express()

app.use('/', routes.default)

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>')
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
