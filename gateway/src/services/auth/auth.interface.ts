import { LoginRequest } from '../../dto/request/login.request';
import { LoginResponse } from '../../dto/response/login.response';

export interface IAuthService {
  login(request: LoginRequest): Promise<LoginResponse>;
}
