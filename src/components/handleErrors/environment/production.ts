import { Request, Response, NextFunction } from 'express';
import { AppError } from '@handleErrors/models';
import { sendMailToAdminIfCritical } from '@handleErrors/utils';
import { loggerMongoDB } from '@app';

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
    loggerMongoDB.saveLog(err);
    sendMailToAdminIfCritical();

    return res.status(err.statusCode).json({
      status: 'error',
      data: {
        message: 'Something went wrong! Please, contact us.'
      }
    });
  }
}
