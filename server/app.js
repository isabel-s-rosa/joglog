const bodyParser = require('body-parser');
const express = require("express");
const path = require("path");
const session = require('express-session');

const db = require('./db');
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const publicPath = path.resolve(__dirname, "..", "client", "dist");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const User = require('./models/user');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

app.use(session({
  secret: 'session-secret',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get(["/login", "/", "/success"], (req, res) => {
  console.log(req.isAuthenticated());
  res.sendFile(path.join(publicPath, "index.html"));
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
},
function(req, username, password, done) {
  console.log('got here');
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) { return done(err); }
    if (!user) {
      console.log("wrong username");
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!(user.password===req.body.password)) {
      console.log("wrong pword");
      return done(null, false, { message: 'Incorrect password.' });
    }
    console.log(user);
    return done(null, user);
  });
}
));

  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

app.get('/api/whoami', function(req, res){
  console.log(req.isAuthenticated());
  if(req.isAuthenticated()) {
    res.send(req.user);
}
else {
    res.send({});
}
})

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
    res.body = '/';
  });

app.get('/api/users', function(req, res) {
  User.find({}, function(err, users) {
    res.send(users);
  });
});

app.use(express.static(publicPath));

// 404 route
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// route error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    status: err.status,
    message: err.message,
  });
});

http.listen((process.env.PORT || 3000), () => {
  console.log(`Listening on port 3000 and looking in folder ${publicPath}`);
});
