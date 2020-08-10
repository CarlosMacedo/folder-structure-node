import { Request, Response, NextFunction } from 'express';
import { middlewareDebugger } from '../../shared/utils';

export const hw = (req: Request, res: Response, next: NextFunction) => {
  middlewareDebugger('Middleware :)');
  next();
};
