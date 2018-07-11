import passport from 'koa-passport';

/**
 * [promisifyPassportAuthorizeRoutine description]
 * @param  {[type]} strategy [description]
 * @return {[type]}          [description]
 */
function promisifyPassportAuthorizeRoutine(strategy, ctx) {
  return new Promise(function (resolve, reject) {
    debugger;
    return passport.authorize(strategy, function (err, user) {
      debugger;
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
    debugger;
    const user = await promisifyPassportAuthorizeRoutine('django', ctx);

    ctx.user = user;

    await next();
  } catch (e) {
    debugger;
    ctx.body = { message: e };
    return ctx.throw(e.status);
  }
}
