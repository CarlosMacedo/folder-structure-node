import express from 'express'
import config from 'config'

import { createRouterMe, createRouterNotFound } from '../controller/routers'

export function initRouters (app: express.Application): void {
  const apiUrl = config.get('apiUrl')

  app.use(`${apiUrl}/me`, createRouterMe())
  app.all('*', createRouterNotFound())
}
