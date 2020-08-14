import { Request, Response } from 'express';

export const getMe = async (req: Request, res: Response) => {
  return res.status(200).json({
    status: 'success',
    data: {
      message: 'Hello World!'
    }
  });
};
