import { configDotenv } from 'dotenv';
import { object, string } from 'zod';

configDotenv();

const schema = object({
  APP_PORT: string()
    .regex(/^\d{1,5}$/)
    .default('3000'),
  NODE_ENV: string().regex(
    /^(development|test|production)$/,
    'Invalid value for NODE_ENV. Valid values are "development", "test", or "production"',
  ),
  DATABASE_URL: string(),
  SESSION_TOKEN_SECRET: string(),
  SESSION_TOKEN_TTL: string().regex(new RegExp('[0-9]{1,6}s')),
  REFRESH_TOKEN_TTL: string().regex(new RegExp('[0-9]{1,6}s')),
  PRODUCT_SERVICE_URL: string(),
});

const envConfig = schema.parse(process.env);

export const environment = {
  appPort: envConfig.APP_PORT,
  nodeEnv: envConfig.NODE_ENV,
  dbUrl: envConfig.DATABASE_URL,
  sessionTokenSecret: envConfig.SESSION_TOKEN_SECRET,
  sessionTokenTtl: envConfig.SESSION_TOKEN_TTL,
  refreshTokenTtl: envConfig.REFRESH_TOKEN_TTL,
  productServiceUrl: envConfig.PRODUCT_SERVICE_URL,
};
