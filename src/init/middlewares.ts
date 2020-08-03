import express from 'express'
import cors from 'cors'
import compression from 'compression'

import { hw } from '../controller/middlewares/helloworld'

export function initMiddlewares (app: express.Application): void {
  app.use(express.json())

  app.use(cors())
  app.use(compression())
  app.options('*', cors())

  app.use(hw)
}
