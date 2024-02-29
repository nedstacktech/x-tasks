const express = require('express');
const passport = require('passport');
const { Strategy } = require('@superfaceai/passport-twitter-oauth2');
const session = require('express-session');
const {createServer} = require("node:http");
const {Server} = require("socket.io");
const cors = require('cors');
require('dotenv').config();



// <1> Serialization and deserialization
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Use the Twitter OAuth2 strategy within Passport
passport.use(
  // <2> Strategy initialization
  new Strategy(
    {
      clientID: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      clientType: 'confidential',
      callbackURL: `${process.env.BASE_URL}/auth/twitter/callback`,
    },
    // <3> Verify callback
    (accessToken, refreshToken, profile, done) => {
      console.log('Success!', { accessToken, refreshToken });
      return done(null, profile);
    }
  )
);

const app = express();
const server = createServer(app);
app.use(cors())
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
  }
});
io.on('connection', (socket) => {
  console.log('a user connected');
});

// <4> Passport and session middleware initialization
app.use(passport.initialize());
app.use(
  session({ secret: 'keyboard cat', resave: false, saveUninitialized: true })
);
let sid = ''
const addSocketIdToSession = (req, res, next) => {
  // se = req.query.socketId;
  sid = req.query.socketId;
  next();
};

// <5> Start authentication flow
app.get('/', (req, res) => {
  res.send("<h1>Nice</h1>")
})
app.get(
  '/auth/twitter', addSocketIdToSession,
  passport.authenticate('twitter', {
    // <6> Scopes
    scope: ['tweet.read', 'users.read', 'offline.access'],
  })
);

// <7> Callback handler
app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter'),
  function (req, res) {
    // const userData = JSON.stringify(req.user, undefined, 2);
    // res.end(
    //   `<h1>Authentication succeeded</h1> User data: <pre>${userData}</pre>`
    // );
    const user = {
      name: req.user.username,
      photo: req.user.photos[0].value.replace(/_normal/, ""),
    };
  console.log(req.session.socketId);

    // io.in(req.session.socketId).emit('twitter', user)
    io.in(sid).emit("user", user);

    res.send("<script>window.close()</script>")
  }
);

server.listen(3000, () => {
  console.log(`Listening on ${process.env.BASE_URL}`);
});