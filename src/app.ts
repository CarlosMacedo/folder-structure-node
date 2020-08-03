import express from 'express'
import { initDatabases, initMiddlewares, initRouters } from './init'

const app = express()

initMiddlewares(app)
initRouters(app)
initDatabases()

export default app
