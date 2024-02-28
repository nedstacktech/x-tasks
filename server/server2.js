const express = require("express");
const http = require("http");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const socketio = require("socket.io");
const { Strategy } = require("@superfaceai/passport-twitter-oauth2");
require("dotenv").config();
// Private api keys that you will get when registering an app on
// apps.twitter.com
// const TWITTER_CONFIG = {
//   consumerKey: process.env.TWITTER_CLIENT_ID,
//   consumerSecret: process.env.TWITTER_CLIENT_SECRET,
//   // make sure the callbackUrl matches what was set on Twitter
//   // when registering the app
//   callbackURL: `${process.env.BASE_URL}/auth/twitter/callback`,
// };

// Create the server and allow express and socketio to run on the same port
const app = express();
const server = http.createServer(app);
const io = socketio(server);
// const io = socketio(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });
// Allows the application to accept JSON and use passport
app.use(express.json());
app.use(passport.initialize());

// Set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

// saveUninitialized: true allows us to attach the socket id
// to the session before we have authenticated with Twitter
app.use(
  session({
    secret: "KeyboardKittens",
    resave: true,
    saveUninitialized: true,
  })
);
io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});
// allows us to save the user into the session
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

console.log(process.env.TWITTER_CLIENT_SECRET);
// Basic setup with passport and Twitter
passport.use(
  // <2> Strategy initialization
  new Strategy(
    {
      clientID: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      clientType: "confidential",
      callbackURL: `http://localhost:3000/auth/twitter/callback`,
    },
    // <3> Verify callback
    (accessToken, refreshToken, profile, done) => {
      console.log("Success!", { accessToken, refreshToken });
      return done(null, profile);
    }
  )
);

// Middleware that triggers the PassportJS authentication process
// const twitterAuth = passport.authenticate("twitter", {
//   scope: ["profile", "email"],
// });

// This custom middleware picks off the socket id (that was put on req.query)
// and stores it in the session so we can send back the right info to the
// right socket
let se = "";
console.log(process.env.BASE_URL);
const addSocketIdToSession = (req, res, next) => {
  se = req.query.socketId;
  console.log(se);
  req.session.socketId = req.query.socketId;
  next();
};

// This is endpoint triggered by the popup on the client which starts the whole
// authentication process
app.get(
  "/auth/twitter",
  addSocketIdToSession,
  passport.authenticate("twitter", {
    // <6> Scopes
    scope: ["tweet.read", "users.read", "offline.access"],
  })
);

// This is the endpoint that Twitter sends the user information to.
// The twitterAuth middleware attaches the user to req.user and then
// the user info is sent to the client via the socket id that is in the
// session.
app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", {
    // <6> Scopes
    scope: ["tweet.read", "users.read", "offline.access"],
  }),
  (req, res) => {
    // const io = req.app.get('io')
    const user = {
      name: req.user.username,
      photo: req.user.photos[0].value.replace(/_normal/, ""),
    };
    // io.in(req.session.socketId).emit('twitter', user)
    // res.end()
    io.in(se).emit("user", user);
    // alert(user);
    // res.redirect("/");
  }
);

server.listen(3000, () => {
  console.log("listening...");
});
