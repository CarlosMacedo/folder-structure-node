import express = require('express');
import { Router } from 'express';
import { getMe } from './get';

export function createRouterMe(): Router {
  const meRouter = express.Router();

  meRouter.route('/').get(getMe);

  return meRouter;
}
