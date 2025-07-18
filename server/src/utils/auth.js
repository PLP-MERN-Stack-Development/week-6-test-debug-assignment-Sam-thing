const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'test-secret';

function generateToken(payload) {
  if (typeof payload !== 'object' || payload === null || Array.isArray(payload)) {
    throw new Error('Invalid payload for JWT');
  }
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}


function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
