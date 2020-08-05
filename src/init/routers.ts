import express from 'express'
import config from 'config'

import { createRouterMe } from '../controller/routes/me/router'

export function initRouters (app: express.Application): void {
  const apiUrl = config.get('apiUrl')

  app.use(`${apiUrl}/me`, createRouterMe())
}
