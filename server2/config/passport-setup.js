const passport = require("passport");
const { Strategy } = require("@superfaceai/passport-twitter-oauth2");
const { AuthKeys, BaseUrl } = require("./keys.js");
const User = require("../models/user-model");

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
  let user = await User.findById(id);
  done(null, user);
})


passport.use(
  new Strategy(
    {
      clientID: AuthKeys.clientID,
      clientSecret: AuthKeys.clientSecret,
      callbackURL: `${BaseUrl}/auth/twitter/callback`,
      clientType: "confidential",
    },
    async (accessToken, refreshToken, profile, done) => {
      let currentUser = await User.findOne({ twitterId: profile.id });
      if (currentUser) {
        console.log(profile.id);
        done(null, currentUser);
      } else {
        let { id, username, displayName, photos } = profile;
        const newUser = await new User({
          name: displayName,
          userName: username,
          twitterId: id,
          profileImageUrl: photos[0].value,
        }).save();
        done(null, newUser);
      }
    }
  )
);
