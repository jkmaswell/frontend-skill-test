process.env.BABEL_CONFIG = process.env.BABEL_CONFIG || 'server'
require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime'],
})

const express = require('express')
const cors = require('cors')
const routes = require('./server/routes')

const app = express()

app.use(cors())
app.use('/', routes.default)
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>')
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))
