import type { Application } from 'express';
import { Router } from 'express';
import authController from '../controllers/auth.controller';
import productController from '../controllers/product.controller';

const router = Router({ mergeParams: true });

export const configureRoutes = (app: Application) => {
  app.use('/api', router);
  router.use('/auth', authController);

  // TODO - auth middleware
  router.use('/products', productController);
};
