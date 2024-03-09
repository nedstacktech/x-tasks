const router = require("express").Router();
const cors = require("cors");

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.end();
  } else {
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  res.send(req.user);
});

module.exports = router;
