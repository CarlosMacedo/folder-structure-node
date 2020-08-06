import { Request, Response } from 'express'

export const notFound = (req: Request, res: Response): Response<Response> => {
  return res.status(404).send({
    status: 'fail',
    data: {
      message: `Can't find ${req.originalUrl} on this server!`
    }
  })
}
