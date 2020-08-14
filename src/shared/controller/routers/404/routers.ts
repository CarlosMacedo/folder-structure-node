import express = require('express');
import { Router } from 'express';
import { notFound } from './404';

export function createRouterNotFound(): Router {
  const notFoundRouter = express.Router();

  notFoundRouter.route('*').get(notFound);

  return notFoundRouter;
}
