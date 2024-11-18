import { InternalException } from './internal.exception';
import { Severity } from '../enums/severity.enum';
import { ExceptionType } from '../types/exception.type';

export class InvalidEmailException extends InternalException {
    constructor(exception?: ExceptionType) {
        super({
            code: 'invalid-email',
            message: 'Invalid email',
            status: 400,
            name: 'Invalid email',
            severity: Severity.Error,
            ...exception,
        });
    }
}
