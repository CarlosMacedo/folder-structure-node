import { Request, Response } from 'express'

export const getMe = (req: Request, res: Response): Response<Response> => {
  return res.send('Hello World!')
}
