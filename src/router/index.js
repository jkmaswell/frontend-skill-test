import appRouter from './app'

const getRouter = (store) => {
  const router = appRouter({ store })
  return router
}

export default getRouter
