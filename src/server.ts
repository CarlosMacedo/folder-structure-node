import 'express-async-errors';
import config from 'config';
import { app } from './app';
import { startupDebugger } from './shared/utils';

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
    console.log('Server closed!');
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Server closing...');
  server.close(() => {
    console.log('Server closed!');
    process.exit(1);
  });
});
