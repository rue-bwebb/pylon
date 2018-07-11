import passport from 'koa-passport';

import djangoStrategy from 'lib/strategies/django';

/**
 * Initializes all Passport-related functionality and authentication strategies
 */

passport.use('django', djangoStrategy);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  try {
    const user = { id };
    done(null, user);
  } catch(err) {
    done(err);
  }
});

// Configure/initialize passport
export default passport.initialize();
