const { sign } = require('jsonwebtoken');

exports.generateAuthToken = (userId, email) => {
  
  return sign({id : userId, email : email}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_ON });
};