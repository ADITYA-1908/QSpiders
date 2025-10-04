import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { AppError } from '../utils/AppError.js';

export const auth = asyncHandler(async (req, res, next) => {
  let token;

  // Get token from header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      const user = await User.findById(decoded.userId).select('-password');
      
      if (!user) {
        throw new AppError('User not found', 401);
      }

      req.user = user;
      next();
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        throw new AppError('Not authorized, invalid token', 401);
      } else if (error.name === 'TokenExpiredError') {
        throw new AppError('Not authorized, token expired', 401);
      } else {
        throw error;
      }
    }
  }

  if (!token) {
    throw new AppError('Not authorized, no token provided', 401);
  }
});