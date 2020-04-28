import express from 'express'
import configRoute from './config'

const versionOneRouter = express.Router()

versionOneRouter.use('/config', configRoute)

export default versionOneRouter
