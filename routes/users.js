const express = require('express');
const router = express.Router();
const config = require('../config');
const { generateToken } = require('../utils');


router.get('/token', (req, res, next) => {
  const { provider, secret, supervisor_url } = config;
  const iat = ~~(Date.now() / 1000);
  const { username, nickname, id, subject, tags } = req.user;
  const payload = {
    username,
    nickname,
    subject,
    id,
    tags,
    iat,
    exp: iat + 12 * 60 * 60
  };
  let jwt;
  try {
    jwt = generateToken(secret, payload, provider);
  } catch (error) {
    console.log(error);
    next(new Error('failed generating token'));
  }
  res.cookie('token', jwt, {
    expires: new Date(Date.now() + 8 * 3600000)
  });
  res.send({
    token: jwt,
    provider,
    supervisor_url
  });
});
module.exports = router;
