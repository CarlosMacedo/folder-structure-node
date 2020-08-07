import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../handleErrors/models/appError';

export function production(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): Response<Response> {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      data: {
        message: err.message
      }
    });
  } else {
    //save log with winston here
    return res.status(err.statusCode).json({
      status: 'error',
      data: {
        message: 'Something went wrong! Please, contact us.'
      }
    });
  }
}
