import { Severity } from '../enums/severity.enum';

export type ExceptionType = {
  status?: number;
  name?: string;
  severity?: Severity;
  message?: string;
  detail?: string;
  meta?: unknown;
  code?: string;
};
