import type { NextFunction, Request, Response } from 'express';
import { InternalException } from '../exceptions/internal.exception';
import { BadRequestException } from '../exceptions/bad-request.exception';
import { WrongCredentialsException } from '../exceptions/wrong-credentials.exception';
import { InvalidEmailException } from '../exceptions/invalid-email.exception';

export const exceptionHandler = (err: InternalException, req: Request, res: Response, next: NextFunction) => {
  if (
    err instanceof BadRequestException ||
    err instanceof WrongCredentialsException ||
    err instanceof InvalidEmailException
  ) {
    console.warn(
      {
        message: err.message,
      },
      err,
    );
  } else {
    console.error(
      {
        message: 'Internal Server Error',
      },
      err,
    );
  }

  res.status(err?.status || 500).send({
    message: err.message || err.detail || err.name,
    code: err.code,
  });
};
