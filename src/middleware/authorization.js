import passport from 'koa-passport';

/**
 * [promisifyPassportAuthorizeRoutine description]
 * @param  {[type]} strategy [description]
 * @return {[type]}          [description]
 */
function promisifyPassportAuthorizeRoutine(strategy, ctx) {
  return new Promise(function (resolve, reject) {
    return passport.authorize(strategy, function (err, user) {
      if (err) {
        err.status = 500;
        return reject(err);
      }

      if (!user) {
        const e = new Error('Please login');
        e.status = 401;
        return reject(e);
      }

      return resolve(user);
    })(ctx);
  });
}

/**
 * [description]
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
export default async function authorizationGate (ctx, next) {
  try {
    const user = await promisifyPassportAuthorizeRoutine('django', ctx);

    ctx.user = user;

    await next();
  } catch (e) {
    // Tell koa to show the error message to the client
    e.expose = true;

    ctx.status = e.status;
    ctx.body = { data: { error: { message: e.message } } };

    ctx.app.emit('error', e, ctx);
  }
}
