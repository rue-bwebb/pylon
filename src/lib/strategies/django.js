import { Strategy } from 'passport-custom';

class DjangoStrategy extends Strategy {
  /**
   * [authorize description]
   * @param  {[type]} req [description]
   * @return {[type]}     [description]
   */
  authorize(req) {
    debugger;
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
 * [description]
 * @param  {[type]}   req  [description]
 * @param  {Function} done [description]
 * @return {[type]}        [description]
 */
const djangoStrategy = new DjangoStrategy(function(req, done) {
  debugger;
  const user = { id: 123 };
  return done(null, user);
});

export default djangoStrategy;