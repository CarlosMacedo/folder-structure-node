import { Request, Response, NextFunction } from 'express';
import Debug from 'debug';
const middlewareDebugger = Debug('app:middleware');

export const hw = (req: Request, res: Response, next: NextFunction) => {
  middlewareDebugger('Middleware :)');
  next();
};
