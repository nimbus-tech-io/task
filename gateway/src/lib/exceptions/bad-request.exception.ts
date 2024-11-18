import { InternalException } from './internal.exception';
import type { ExceptionType } from '../types/exception.type';
import { Severity } from '../enums/severity.enum';

export class BadRequestException extends InternalException {
  constructor(exception?: ExceptionType) {
    super({
      code: 'bad-request',
      status: 400,
      name: 'Bad Request Error',
      message: exception?.message || 'Bad request exception',
      severity: Severity.Error,
      detail: 'Bad request',
      ...exception,
    });
  }
}
