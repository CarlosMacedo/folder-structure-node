import express = require('express');
import { getMongoDBUrl } from '@utils';

import {
  initDatabases,
  initMiddlewares,
  initRouters,
  initHandleErrors
} from './init';

const app = express();
const loggerMongoDB = initDatabases(getMongoDBUrl());

initMiddlewares(app);
initRouters(app);
initHandleErrors(app);

export { app, loggerMongoDB };
