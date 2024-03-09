const router = require("express").Router();
const passport = require("passport");

//auth login
router.get("/login", function (req, res) {
  res.redirect("/twitter");
});

//auth logout
router.get("/logout", function (req, res) {
  res.send("logout");
});

let sid = "";
//auth twitter
router.get(
  "/twitter",
  (req, res, next) => {
    sid = req.query.socketId;
    next();
  },
  passport.authenticate("twitter", {
    scope: ["tweet.read", "users.read", "offline.access"],
  })
);

//auth twitter callback
router.get("/twitter/callback", passport.authenticate("twitter"), function (
  req,
  res
) {
  res.send("home");
});

module.exports = router;
