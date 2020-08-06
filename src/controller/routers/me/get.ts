import { Request, Response } from 'express';
import { catchAsync } from '../../handleErrors/utils/catchAsync';

export const getMe = catchAsync(async (req: Request, res: Response) => {
  return res.status(200).json({
    status: 'success',
    data: {
      message: 'Hello World!'
    }
  });
});
