import express from 'express';
import cors from 'cors';

import { environment } from './config/environment';
import { configureRoutes } from './config/routes';
import { exceptionHandler } from './lib/handlers/exception.handler';

(async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  configureRoutes(app);

  app.use(exceptionHandler);

  app.listen(environment.appPort, () => console.log(`Gateway is up and running on port ${environment.appPort}`));
})();
