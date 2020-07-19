const jwt = require('jsonwebtoken');
// require('dotenv').config();
module.exports = async (req, res, next) => {
  try {
    //the token
    const jwtToken = req.headers.authorization.split(' ')[1];
    if (!jwtToken) {
      return res.status(403).json({ msg: 'Authorization Denied' });
    }
    const payload = jwt.verify(jwtToken, process.env.SECRET);
    req.id = payload.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
