const express = require('express');
const router = express.Router();
const path = require('path');
const faker = require('faker')
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.resolve(__dirname + '/../view/home.html'));
  res.render('index');
});


module.exports = router;
