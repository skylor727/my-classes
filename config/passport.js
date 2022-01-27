const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },

    (accessToken, refreshToken, profile, cb) => {
      User.findOne({ googleId: profile.id }).then(async (user) => {
        if (user) return cb(null, user);

        try {
          user = await User.create({
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            role: "ROLE_BASIC",
          });
          return cb(null, user);
        } catch (err) {
          return cb(err);
        }
      });
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((userId, cb) => {
  User.findById(userId).then((user) => {
    cb(null, user);
  });
});
