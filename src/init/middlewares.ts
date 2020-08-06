import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import Debug from 'debug'
import { hw } from '../controller/middlewares/helloworld'

const middlewareDebugger = Debug('app:middleware')

export function initMiddlewares (app: express.Application): void {
  if (process.env.Node_ENV !== 'production') {
    app.use(morgan('dev'))
    middlewareDebugger('Using morgan...')
  }

  app.use(express.json())

  app.use(cors())
  app.options('*', cors())
  app.use(compression())

  app.use(hw)
}
