var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');
require('dotenv').config()


var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var applicationsRouter = require('./routes/applications');
var interviewsRouter = require('./routes/interviews');

var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'JCRocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
 app.use(passport.session());

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
// app.use('/', usersRouter);
app.use('/applications', applicationsRouter);
app.use('/', interviewsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
