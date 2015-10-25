var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/campusforsale');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

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

// Middleware for passport-authentication
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.get('/login', function(req, res) {
  res.sendfile('public/login.html');
});

app.post('/login', passport.authenticate('login', {
    successRedirect : '/lmao',
    failureRedirect : '/no'
}));

app.get('/signup', function(req, res) {
  res.sendfile('public/signup.html');
});

app.get('/no', function(req, res) {
  res.send('Failed to authenticate');
});

app.get('/lmao', function(req, res) {
  res.send('Successfully authenticated');
});

function isValidPassword(user, password) {
  return (user.password === password);
}

passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    //mongoose.connect('mongodb://localhost/campusforsale');
    var oy = User.findOne({ 'email' :  username },
      function(err, user) {
        console.log('check ' + username);
        console.log('check ' + password);
        console.log('check ' + oy.email);
        if (err)
          return done(err);
        if (!user){
           return done(null, false, { message: 'Incorrect username.' });
        }
        if (!isValidPassword(user, password)){
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      }
    );
    //mongoose.disconnect();
}));

passport.use('signup', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    findOrCreateUser = function(){
      //mongoose.connect('mongodb://localhost:27017/campusforsale');
      User.findOne({'email':username},function(err, user) {
        if (err){
          return done(err);
        }
        if (user) {
          return done(null, false, { message: 'User already exists' });
        } else {
          var newUser = new User();
          newUser.email = username;
          newUser.password = password;
          newUser.save(function(err) {
            if (err){
              throw err;
            }
            return done(null, newUser);
          });
        }
      });
      //mongoose.disconnect();
    };
    process.nextTick(findOrCreateUser);
  })
);

app.use('/items', ItemHandler);
app.use('/search', SearchHandler);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
