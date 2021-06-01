var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var authenticate = require('./authenticate');

var mongoose = require('mongoose');
var passport = require('passport');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var editprofileRouter = require('./routes/editprofile');
var infoRouter = require('./routes/addinfo');
var skinUpload = require('./routes/skin');

var app = express();

const connection = mongoose.connect('mongodb://localhost:27017/isymptomate', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
connection.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/editprofile', editprofileRouter);
app.use('/admin', adminRouter);
app.use('/addinfo', infoRouter);
app.use('/skin', skinUpload);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
