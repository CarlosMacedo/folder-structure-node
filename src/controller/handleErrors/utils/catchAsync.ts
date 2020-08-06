import { Request, Response, NextFunction } from 'express';

export const catchAsync = (fn) => {
  return (req: Request, res: Response, next: NextFunction): any => {
    fn(req, res, next).catch(next);
  };
};
