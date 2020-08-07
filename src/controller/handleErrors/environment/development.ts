import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../handleErrors/models/appError';

export function development(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): Response<Response> {
  return res.status(err.statusCode).json({
    status: err.status,
    data: {
      err,
      stack: err.stack,
      message: err.message
    }
  });
}
