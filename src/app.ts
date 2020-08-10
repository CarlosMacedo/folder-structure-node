import express from 'express';
import { getMongoDBUrl } from './shared/utils';

import {
  initDatabases,
  initMiddlewares,
  initRouters,
  initHandleErrors
} from './init';

const app = express();

initMiddlewares(app);
initRouters(app);
const loggerMongoDB = initDatabases(getMongoDBUrl());
initHandleErrors(app);

export { app, loggerMongoDB };
