require('express-async-errors');
import app from './app';
import config from 'config';
import Debug from 'debug';
const startupDebugger = Debug('app:startup');

process.on('uncaughtException', (err) => {
  console.log(err);
  console.log('UncaughtException. Shutting down...');
  process.exit(1);
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  startupDebugger(`Listening on port ${port}...`, config.get('name'));
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  console.log('UnhandledRejection. Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
