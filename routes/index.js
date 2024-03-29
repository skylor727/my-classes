var express = require("express");
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

//Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/my-classes/",
    failureRedirect: "/my-classes/",
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/my-classes/");
});

router.get('/', (req, res) => {
  res.render('index')
})
module.exports = router;
