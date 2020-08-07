import mongoose from 'mongoose';
import config from 'config';
import Debug from 'debug';
const dbDebugger = Debug('app:db');

export function initDatabases(): void {
  let dbUrl: string = config.get('db.url');
  const dbName: string = config.get('db.name');
  const dbPassword: string = config.get('db.password');
  dbUrl = dbUrl.replace('<dbname>', dbName);
  dbUrl = dbUrl.replace('<password>', dbPassword);
  console.log(dbUrl);
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    })
    .then((c) => {
      dbDebugger(c.connections);
      dbDebugger('DB connection successful!');
    });
}
