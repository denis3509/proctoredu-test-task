const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testRouter = require('./routes/test');
const db = require('./Database')

const app = express();
app.use(cors({
//  origin: '*' // для разработки
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

app.use('/users/login', (req,res,next)=> {
  //предусмотренные системой тестирования механизмы авторизации
  const {username} = req.body;
  res.cookie('username', username, {
    expires: new Date(Date.now() + 8 * 3600000)
  })
  res.send({success : true, username})
})

app.use((req, res, next) => {
  //предусмотренные системой тестирования механизмы аутентификации
  const { username } = req.cookies;
  if (username) {
    req.user = db[username];
    next();
  } else {
    next(new Error('unauthorized'))
  }
});

app.use('/users', usersRouter);
app.use('/test', testRouter);
module.exports = app;
