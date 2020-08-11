import express = require('express');
import { handleErrors } from '@handleErrors';

export function initHandleErrors(app: express.Application): void {
  app.use(handleErrors);
}
