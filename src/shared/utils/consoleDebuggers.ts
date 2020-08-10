import Debug from 'debug';
const startupDebugger = Debug('app:startup');
const middlewareDebugger = Debug('app:middleware');
const dbDebugger = Debug('app:db');

export { startupDebugger, middlewareDebugger, dbDebugger };
