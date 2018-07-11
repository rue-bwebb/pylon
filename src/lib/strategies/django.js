import config from 'config';
import { Strategy } from 'passport-custom';

class DjangoStrategy extends Strategy {
  /**
   * [authorize description]
   * @param  {[type]} req [description]
   * @return {[type]}     [description]
   */
  authorize(req) {
    const verified = (err, user, info) => {
      if (err) {
        return this.error(err);
      }

      if (!user) {
        return this.fail(info);
      }

      this.success(user, info);
    }

    try {
      this._verify(req, verified);
    } catch (e) {
      return this.error(e);
    }
  }
}

/**
 * [isGraphQlPlaygroundView description]
 * @param  {[type]}  ctx [description]
 * @return {Boolean}     [description]
 */
function isGraphQlPlaygroundView(ctx) {
  const requestingGQLP = (ctx.method.toLowerCase() === 'get' && ctx.url === config.graphql.url);
  return requestingGQLP && config.graphql.gui;
}

/**
 * [description]
 * @param  {[type]}   req  [description]
 * @param  {Function} done [description]
 * @return {[type]}        [description]
 */
const djangoStrategy = new DjangoStrategy(function(ctx, done) {
  if (!isGraphQlPlaygroundView(ctx) && !('authorization' in ctx.header)) {
    return done(null, false);
  }

  const user = { id: 123 };
  return done(null, user);
});

export default djangoStrategy;