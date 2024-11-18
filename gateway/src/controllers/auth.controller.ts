import { NextFunction, Request, Response, Router } from 'express';

import { LoginRequest } from '../dto/request/login.request';
import { getAuthService } from '../services/auth/auth.service';
import { LoginResponse } from '../dto/response/login.response';

const router = Router({ mergeParams: true });

router.post('/login', async (req: Request<void, void, LoginRequest, {}>, res: Response, next: NextFunction) => {
  getAuthService()
    .login(req.body)
    .then((response: LoginResponse) => res.send(response))
    .catch(next);
});

export default router;
