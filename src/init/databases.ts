import mongoose from 'mongoose';
import Fawn from 'fawn';
import { Log } from '@utils';
import { dbDebugger } from '@utils';

export function initDatabases(dbUrl: string): Log {
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    })
    .then((c) => {
      dbDebugger('DB connection successful!');
      Fawn.init(mongoose);
    });

  return new Log(dbUrl, 'logs');
}
