import { Request, Response, NextFunction } from 'express';
import Debug from 'debug';
const errorsDebugger = Debug('app:errors');

export function handleErrors(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err) {
  } else {
  }
  errorsDebugger('Center...');
}
