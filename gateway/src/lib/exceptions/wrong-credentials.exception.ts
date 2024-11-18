import { InternalException } from './internal.exception';
import { Severity } from '../enums/severity.enum';
import { ExceptionType } from '../types/exception.type';

export class WrongCredentialsException extends InternalException {
  constructor(exception?: ExceptionType) {
    super({
      code: 'wrong-credentials',
      message: 'Wrong credentials',
      status: 401,
      name: 'Wrong credentials',
      severity: Severity.Error,
      ...exception,
    });
  }
}
