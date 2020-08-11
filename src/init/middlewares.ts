import express = require('express');
import cors = require('cors');
import compression = require('compression');
import mongoSanitize = require('express-mongo-sanitize');
import xss from 'xss-clean';
import rateLimit = require('express-rate-limit');
import helmet from 'helmet';
import hpp = require('hpp');
import morgan = require('morgan');
import { middlewareDebugger } from '@utils';
import { hw } from '@middlewares/helloworld';

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000, //in 1h
  message: 'Too many requests from this IP, please try again later.'
});

export function initMiddlewares(app: express.Application): void {
  app.use(helmet());
  app.use('/api', limiter);

  if (process.env.Node_ENV !== 'production') {
    app.use(morgan('dev'));
    middlewareDebugger('Using morgan...');
  }

  app.use(express.json({ limit: '10kb' }));
  app.use(cors());
  app.options('*', cors());
  app.use(compression());

  app.use(mongoSanitize());
  app.use(xss());
  app.use(
    hpp({
      whitelist: []
    })
  );

  app.use(hw);
}
