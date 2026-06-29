import { buildApp } from './app';
import { env } from './lib/env';

async function start(): Promise<void> {
  const app = await buildApp();

  try {
    await app.listen({ port: env.PORT, host: env.HOST });
    app.log.info(`Server running on http://${env.HOST}:${env.PORT}`);
    app.log.info(`Environment: ${env.NODE_ENV}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();