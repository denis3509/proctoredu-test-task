const jwt = require('jsonwebtoken')

function generateToken(secret, payload, provider) {
  //сделаю толко для jwt, но можно отсюда же возвращать любые другие

  return jwt.sign(payload,secret,{algorithm : 'HS256'})
}

module.exports = {
  generateToken
}