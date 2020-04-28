import express from 'express'
import versionOneRoutes from './api'
import middleware from './middleware'

const router = express.Router()

// Register middleware
router.use(middleware.bodyParserJson)
router.use(middleware.cookieParser)

// Register routes
router.use('/api', versionOneRoutes)

export default router
