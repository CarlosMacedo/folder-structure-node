import express, { Router } from 'express'
import { createMeRouter } from '../routes/me.router'

export function initRouters (app: express.Application): void {
  routers().forEach(router => {
    app.use('/api/v1/me', router)
  })
}

function routers (): Router[] {
  return [
    createMeRouter()
  ]
}
