import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../handleErrors/models/appError';
import { catchAsync } from '../../handleErrors/utils/catchAsync';

export const notFound = catchAsync(
  async (req: Request, res: Response, next: NextFunction): void => {
    throw new AppError(`Can't find ${req.originalUrl} on this server! :(`, 404);
  }
);
