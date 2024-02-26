const express = require("express");
const http = require("http");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const socketio = require("socket.io");
const { Strategy } = require("@superfaceai/passport-twitter-oauth2");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

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
      clientType: "confidential",
      callbackURL: `${process.env.BASE_URL}/auth/twitter/callback`,
    },
    // <3> Verify callback
    (accessToken, refreshToken, profile, done) => {
      console.log("Success!", { accessToken, refreshToken });
      return done(null, profile);
    }
  )
);



const io = socketio(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
// <4> Passport and session middleware initialization
app.use(passport.initialize());
app.use(
  session({ secret: "keyboardcat", resave: true, saveUninitialized: true })
);
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   })
// );

let se = "";
const addSocketIdToSession = (req, res, next) => {
  console.log(req.query.socketId);
  se = req.query.socketId;
  req.session.socketId = req.query.socketId;
  next();
};
// <5> Start authentication flow
app.get(
  "/auth/twitter",
  addSocketIdToSession,
  passport.authenticate("twitter", {
    // <6> Scopes
    scope: ["tweet.read", "users.read", "offline.access"],
  })
);

// <7> Callback handler
app.get("/auth/twitter/callback", passport.authenticate("twitter"), function (
  req,
  res
) {
  // const userData = JSON.stringify(req.user, undefined, 2);
  // res.redirect("/");
  // res.sendFile(userData);
  const user = {
    name: req.user.username,
    photo: req.user.photos[0].value.replace(/_normal/, ""),
  };
  // io.in(req.session.socketId).emit('twitter', user)
  // res.end()
  io.in(se).emit("user", user);
  console.log(se);
  // res.redirect("/");
  res.end();
});

app.listen(3000, () => {
  console.log(`Listening on ${process.env.BASE_URL}`);
});
