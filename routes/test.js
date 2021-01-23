const express = require('express');
const router = express.Router();
const path = require('path');
const faker = require('faker');
const config = require('../config');


router.get('/startPage', function(req, res, next) {
  const { provider, supervisor_url } = config;
  res.send({
    message: 'Welcome!\n' + faker.lorem.paragraph(),
    provider,
    supervisor_url
  });
});

router.get('/questions', function(req, res, next) {
  const test = [];
  for (let i = 0; i < 5; i++) {
    const question = {
      text: faker.lorem.sentence(),
      variants: [
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word()
      ]
    };
    test.push(question);
  }
  res.send({ test });
});

router.post('/answers', (req, res, next) => {
  res.send({
    message: 'You are done! We\'ll send results to your email'
  });
});


module.exports = router;