import { Request, Response, NextFunction } from 'express';

export function handleErrors(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): Response<Response> {
  return res.status(err.statusCode).json({
    status: err.status,
    data: {
      message: err.message || err.status || 'Internal error'
    }
  });
}
