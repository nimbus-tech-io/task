import { randomUUID } from 'crypto';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { IAuthService } from './auth.interface';
import { LoginRequest } from '../../dto/request/login.request';
import { LoginResponse } from '../../dto/response/login.response';
import { prisma } from '../../../prisma/client';
import { environment } from '../../config/environment';
import { InvalidEmailException } from '../../lib/exceptions/invalid-email.exception';
import { WrongCredentialsException } from '../../lib/exceptions/wrong-credentials.exception';

export const getAuthService = (): IAuthService => {
  return {
    login,
  };
};

const login = async (request: LoginRequest): Promise<LoginResponse> => {
  const { email, password } = request;
  const user = await prisma.users.findFirst({ where: { email } });

  if (!user) {
    throw new InvalidEmailException();
  }

  const isValidPw = await bcrypt.compare(password, user.password);

  if (!isValidPw) {
    throw new WrongCredentialsException();
  }

  const sessionId = randomUUID();

  const sessionTokenPayload = {
    sub: user.id,
    sessionId,
  };

  const sessionTokenTtl = environment.sessionTokenTtl;

  const sessionToken = jwt.sign(sessionTokenPayload, environment.sessionTokenSecret, { expiresIn: sessionTokenTtl });

  const refreshTokenTtl = environment.refreshTokenTtl;

  const refreshTokenPayload = {
    userId: user.id,
    sessionId,
  };

  const refreshToken = jwt.sign(refreshTokenPayload, environment.sessionTokenSecret, { expiresIn: refreshTokenTtl });

  return {
    token: sessionToken,
    refreshToken,
  };
};
