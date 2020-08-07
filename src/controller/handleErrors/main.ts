import { Request, Response, NextFunction } from 'express';

export function handleErrors(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response<Response> {
  err.statusCode = err.statusCode || 500;

  return res.status(err.statusCode).json({
    status: err.status || 'error',
    data: {
      message: err.message || err.status || 'Internal error'
    }
  });
}
