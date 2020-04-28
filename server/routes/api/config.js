import { Router } from 'express'
import config from '../../config'

const router = Router()

export const getRoute = (req, res) => {
  try {
    res.json(config.get())
  } catch (err) {
    console.error(err)
    res.status(500)
  }
}

router.get('/', getRoute)

export default router
