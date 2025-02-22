const passport = require('passport');

const auth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (!user || err || req.headers.authorization.split(' ')[1] !== user.token) {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Unauthorized',
        data: 'Unauthorized',
      });
    };
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = auth;