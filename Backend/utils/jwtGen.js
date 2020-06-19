const jwt = require('jsonwebtoken');

function jwtGen(id) {
  const payload = {
    user: id,
  };
  return jwt.sign(payload, process.env.SECRET, { expiresIn: 60 * 60 });
}

module.exports = jwtGen;
