import express from 'express';
import { handleErrors } from '../controller/handleErrors';

export function initHandleErrors(app: express.Application): void {
  app.use(handleErrors);
}
