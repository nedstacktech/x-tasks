const express = require("express");
const { createServer } = require("http");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const keys = require("./config/keys");
const authRoutes = require("./routes/auth-route");
const profileRoutes = require("./routes/profile-route");
const passportSetup = require("./config/passport-setup");
const {connectDB} = require("./config/dbconnection");
const MongoStore = require("connect-mongo");
const cookieSession = require("cookie-session");

const app = express();
const server = createServer(app);

connectDB();
app.use(cors());

app.use(cookieSession({
  name: "session",
  maxAge: 24 * 60 * 60 * 1000,
  keys: ["keyboardcat"]
}))

app.use(
  session({
    secret: "keyboardcat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: keys.MongoDB.url,
      ttl: 24 * 60 * 60 // session TTL (optional)
    })
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Add debugging statements to trace the flow of execution
app.use((req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  console.log("Session ID:", req.sessionID);
  console.log("User Authenticated:", req.isAuthenticated());
  next();
});



app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

server.listen(keys.PORT, () => {
  console.log(`Listening on ${keys.PORT}`);
});
