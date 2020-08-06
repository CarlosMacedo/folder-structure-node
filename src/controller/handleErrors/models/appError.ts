export class AppError extends Error {
  private _statusCode: number;
  private _status: string;
  private _isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this._statusCode = statusCode;
    this._status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this._isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  get statusCode(): number {
    return this._statusCode;
  }

  get status(): string {
    return this._status;
  }

  get isOperational(): boolean {
    return this._isOperational;
  }
}
