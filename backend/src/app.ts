import Fastify, { FastifyInstance, FastifyError } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { env } from './lib/env';
import { healthRoutes } from './routes/health.route';

export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({
    logger: {
      level: env.IS_DEVELOPMENT ? 'debug' : 'info',
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
    },
  });

  await app.register(helmet);

  await app.register(cors, {
    origin: env.CORS_ORIGIN,
    credentials: true,
  });

  await app.register(healthRoutes);

  app.setErrorHandler((error: FastifyError, _request, reply) => {
    app.log.error(error);
    reply.status(error.statusCode ?? 500).send({
      success: false,
      error: env.IS_PRODUCTION ? 'Internal server error' : error.message,
    });
  });

  app.setNotFoundHandler((_request, reply) => {
    reply.status(404).send({
      success: false,
      error: 'Route not found',
    });
  });

  return app;
}