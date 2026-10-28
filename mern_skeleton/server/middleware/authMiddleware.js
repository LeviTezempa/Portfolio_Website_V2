import jwt from 'jsonwebtoken';
import config from '../../config/config.js';

const authMiddleware = (req, res, next) => {
  const token = req.get('authorization')?.match(/^Bearer\s+(\S+)$/i)?.[1];
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret, {
      algorithms: ['HS256'],
    });
    if (typeof decoded === 'string' || !decoded._id) {
      return res.status(401).json({ error: 'Token is invalid or expired' });
    }

    req.auth = decoded;
    req.userId = decoded._id;
    return next();
  } catch {
    return res.status(401).json({ error: 'Token is invalid or expired' });
  }
};

export default authMiddleware;
