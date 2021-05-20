const jwt = require('jsonwebtoken');
const db = require('../db');
const User = db.import('../models/user');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    return next();   // allowing options as a method for request
  }

  const sessionToken = req.headers.authorization;
  if (!sessionToken) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(sessionToken, 'lets_play_sum_games_man', (err, decoded) => {
    if (!decoded) {
      res.status(400).send({ error: 'Not authorized.' });
    }

    User.findOne({ where: { id: decoded.id } })
      .then(user => {
        req.user = user;
        console.log(`user: ${JSON.stringify(user)}`);
        next();
      },
      function () {
        res.status(401).send({ error: 'Not authorized.' });
      });
  });
};