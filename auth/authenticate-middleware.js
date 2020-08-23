/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');
const secrets = require('../config/sercrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // check that the token is valid
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        // foul play
        res.status(401).json({ message: 'Bad panda!' });
      } else {
        // token is goooooooooooooooooood
        req.user = {
          username: decodedToken.username,
        };
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No token provided' });
  }

  // if(token){
  //   jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
  //     if(err){
  //       res.status(401).json({ message: 'Invalid Credentials' })
  //     } else {
  //       req.user = {
  //         username: decodedToken.username
  //       }
  //     }
  //     next();
  //   })
  // } else {
  //   res.status(401).json({ you: 'No token provided' });
  // }
};
