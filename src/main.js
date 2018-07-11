import config from 'config';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';

import authorizationGate from 'middleware/authorization';
import passport from 'middleware/passport';
import router from 'router';
import ruecommerce from 'data/services/ruecommerce';
import schema from 'data/dao/joinMonster';
import uncaughtExceptionHandler from 'utils/uncaughtExceptionHandler';
import unhandledRejectionHandler from 'utils/unhandledRejectionHandler';

// Catches uncaught exceptions and rejections
process.on('uncaughtException', uncaughtExceptionHandler);
process.on('unhandledRejection', unhandledRejectionHandler);

const app = new Koa();
const apollo = new ApolloServer({
  schema,
  introspection: config.graphql.introspection,
});

// Mount the app router
app.use(router.routes());
app.use(router.allowedMethods());

// Add the Passport middleware
app.use(passport);

// Prevent unauthorized access to the query endpoint
app.use(authorizationGate);

// Create the graphql router and attach it to app
apollo.applyMiddleware({
  app,
  gui: config.graphql.gui,
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
// process.once('SIGUSR2', async () => {
//   await app.stop();
//   process.kill(process.pid, 'SIGUSR2');
// });

// pm2 graceful shutdown compatibility
process.once('SIGINT', () => {
  app.stop();
  process.kill(process.pid, 'SIGINT');
});

// atexit handler
process.on('exit', app.stop);

export default app;
