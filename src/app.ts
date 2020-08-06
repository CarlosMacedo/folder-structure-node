import express from 'express';
import {
  initDatabases,
  initMiddlewares,
  initRouters,
  initHandleErrors
} from './init';

const app = express();

initMiddlewares(app);
initRouters(app);
initDatabases();
initHandleErrors(app);

export default app;
