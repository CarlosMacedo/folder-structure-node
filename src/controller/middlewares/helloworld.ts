import { Request, Response, NextFunction } from 'express'

export const hw = (req: Request, res: Response, next: NextFunction) => {
  console.log('Middleware :)')
  next()
}
