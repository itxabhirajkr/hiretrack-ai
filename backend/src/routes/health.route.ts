import { FastifyInstance } from 'fastify';
import { ApiResponse } from '../types/index';
import { prisma } from '../lib/prisma';

export async function healthRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.get('/health', async (_request, reply) => {
    let dbStatus = 'ok';

    try {
      await prisma.$queryRaw`SELECT 1`;
    } catch {
      dbStatus = 'error';
    }

    const allOk = dbStatus === 'ok';

    const response: ApiResponse<{
      status: string;
      timestamp: string;
      services: { database: string };
    }> = {
      success: allOk,
      data: {
        status: allOk ? 'ok' : 'degraded',
        timestamp: new Date().toISOString(),
        services: {
          database: dbStatus,
        },
      },
    };

    return reply.status(allOk ? 200 : 503).send(response);
  });
}