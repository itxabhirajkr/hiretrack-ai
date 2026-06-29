import pino from 'pino';
import { env } from './env';

export const logger = pino({
  level: env.IS_PRODUCTION ? 'info' : 'debug',
  transport: env.IS_DEVELOPMENT
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      }
    : undefined,
});