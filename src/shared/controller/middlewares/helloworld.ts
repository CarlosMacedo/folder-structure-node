import { Request, Response, NextFunction } from 'express';
import { middlewareDebugger } from '@utils';

export const hw = (req: Request, res: Response, next: NextFunction) => {
  middlewareDebugger('Middleware :)');
  next();
};
