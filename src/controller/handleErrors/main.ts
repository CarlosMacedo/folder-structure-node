import { Request, Response, NextFunction } from 'express';
import { development, production } from './environment';
import { AppError } from '../handleErrors/models/appError';

export function handleErrors(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): Response<Response> {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    return development(err, req, res, next);
  } else if (process.env.NODE_ENV === 'production') {
    return production(err, req, res, next);
  }
}
