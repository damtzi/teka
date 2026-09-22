import { structuredLogger } from '@hono/structured-logger';
import { serverEnv } from '@repo/env/server';
import pino from 'pino';
import pretty from 'pino-pretty';

const rootLogger = pino(
	{
		level: serverEnv.LOG_LEVEL
	},
	serverEnv.NODE_ENV === 'production' ? undefined : pretty()
);

const pinoLogger = structuredLogger({
	createLogger: (c) => rootLogger.child({ requestId: c.var.requestId }),
	onResponse: (logger, c, elapsedMs) =>
		logger.info({ method: c.req.method, path: c.req.path, elapsedMs }, 'request completed')
});

export default pinoLogger;
