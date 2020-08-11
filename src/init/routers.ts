import express = require('express');
import config = require('config');

import { createRouterMe, createRouterNotFound } from '@routers';

export function initRouters(app: express.Application): void {
  const apiUrl = config.get('apiUrl');

  app.use(`${apiUrl}/me`, createRouterMe());
  app.all('*', createRouterNotFound());
}
