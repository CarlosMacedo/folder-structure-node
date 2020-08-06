import { Request, Response } from 'express'

export const getMe = (req: Request, res: Response): Response<Response> => {
  return res.status(200).json({
    status: 'success',
    data: {
      message: 'Hello World!'
    }
  })
}
