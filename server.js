var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

var ItemHandler = require('./routes/ItemHandler');
var SearchHandler = require('./routes/SearchHandler');

var User = require("./database/models/user");

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(function(err, req, res, next){
  if(err instanceof SyntaxError){
    res.status(400);
    res.send('400 error - SyntaxError');
  } else {
    next(err);
  }
});
app.use(bodyParser.urlencoded({extended: false}));


app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login',
                                                    failureFlash: true }));

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


app.use('/api/items', ItemHandler);
app.use('/api/search', SearchHandler);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
