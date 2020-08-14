import { Request, Response, NextFunction } from 'express';
import { AppError } from '@handleErrors/models/AppError';

export const notFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  throw new AppError(
    `Can't find ${req.originalUrl} on this server! :(`,
    404,
    true
  );
};
