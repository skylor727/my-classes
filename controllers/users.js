const Class = require("../models/class");
const User = require("../models/user");

const index = (req, res) => {
  User.findById(req.user.id)
    .populate("enrolledClasses")
    .then((user) => {
      res.render("users/enrolled", { classes: user.enrolledClasses });
    });
};
module.exports = {
  index,
};
