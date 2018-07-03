import config from 'config';
import Koa from 'koa';
import { ApolloServer } from 'vendor/apollo-server/packages/apollo-server-koa/dist';

import passport from 'middleware/passport';
import resolvers from 'api/graphql/resolvers';
import router from 'router';
import ruecommerce from 'data/connectors/ruecommerce';
import typeDefs from 'api/graphql/schema/schema.graphql';
import uncaughtExceptionHandler from 'utils/uncaughtExceptionHandler';
import unhandledRejectionHandler from 'utils/unhandledRejectionHandler';

// Catches uncaught exceptions and rejections
process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);

const app = new Koa();
const apollo = new ApolloServer({
  resolvers,
  typeDefs,
});

// Add the Passport middleware
app.use(passport);

// Mount the app HTTPS router (secure routes)
app.use(router.routes());
app.use(router.allowedMethods());

apollo.applyMiddleware({
  app,
  path: config.graphql.url,
});

/**
 * [start description]
 * @type {[type]}
 */
app.start = async function () {
  const { backlog, hostname, port } = config.server;

  try {
    app.server = app.listen(port, hostname, backlog, () => {
      if (process.send) {
        process.send('ready');
      }

      console.log(`Server listening at ${hostname}:${port}...`);
    });
  } catch (e) {
    console.error('An error occurred while starting the server', e);
  }
};

/**
 * [stop description]
 * @type {[type]}
 */
app.stop = async function () {
  try {
    app.http.close();
    await ruecommerce.destroy();
  } catch (e) {
    console.error('An error occurred while stoping the server', e);
  }
};

// nodemon compatibility
process.once('SIGUSR2', async function () {
  await app.stop();
  process.kill(process.pid, 'SIGUSR2');
});

// atexit handler
process.once('exit', app.stop);

export default app;
