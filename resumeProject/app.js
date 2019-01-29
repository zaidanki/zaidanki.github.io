var createError = require('http-errors');
var express = require('express');

// importing the routes
var indexRouter = require('./routes/index');
var projectRouter = require('./routes/projects');

var app = express();

// view engine setup
app.set('view engine', 'pug');

//setting up middleware + static
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));

// using the  index
app.use('/', indexRouter);
app.use('/projects', projectRouter);

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

app.listen(3000);

module.exports = app;
