import config from 'config';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server';

import passport from 'middleware/passport';
import resolvers from 'api/graphql/resolvers';
import router from 'router';
import ruecommerce from 'data/connectors/ruecommerce';
import typeDefs from 'api/graphql/schema';
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
app.start = async () => {
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
app.stop = async () => {
  try {
    await ruecommerce.destroy();
    app.http.close();
  } catch (e) {
    console.error('An error occurred while stoping the server', e);
  }
};

// atexit handler
process.on('exit', app.stop);

export default app;
