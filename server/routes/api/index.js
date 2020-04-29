import express from 'express'
import configRoute from './config'
import invoicesRoute from './invoices'

const versionOneRouter = express.Router()

versionOneRouter.use('/config', configRoute)
versionOneRouter.use('/invoices', invoicesRoute)

export default versionOneRouter
