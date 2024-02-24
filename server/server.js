const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const { Strategy } = require("@superfaceai/passport-twitter-oauth2");
require("dotenv").config();

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

const app = express();

// <4> Passport and session middleware initialization
app.use(passport.initialize());
app.use(
  session({ secret: "keyboardcat", resave: true, saveUninitialized: true })
);
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// <5> Start authentication flow
app.get(
  "/auth/twitter",
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
  const userData = JSON.stringify(req.user, undefined, 2);
  res.end(
    `<h1>Authentication succeeded</h1> User data: <pre>${userData}</pre>`
  );
});

app.listen(3000, () => {
  console.log(`Listening on ${process.env.BASE_URL}`);
});
