import { Severity } from '../enums/severity.enum';

export abstract class InternalException extends Error {
  status: number;
  severity?: Severity;
  name: string;
  detail?: string;
  meta?: unknown;
  code?: string;
  protected constructor(data: {
    name: string;
    message?: string;
    status?: number;
    code?: string;
    detail?: string;
    severity?: Severity;
    meta?: unknown;
  }) {
    super(data.message || data.detail || data.name);
    this.name = data.name;
    this.status = data.status || 500;
    this.detail = data.detail;
    this.severity = data.severity;
    this.code = data.code;
    this.meta = data.meta;
  }
}
