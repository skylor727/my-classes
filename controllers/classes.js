const Class = require("../models/class");
const User = require("../models/user");

const index = (req, res) => {
  Class.find({}).then((classes) => {
    User.findById(req.user.id).then((user) =>
      res.render("classes/index", { classes, user })
    );
  });
};

const show = (req, res) => {
  Class.findById(req.params.id).then((classes) => {
    res.render("classes/show", { classes });
  });
};

const newClass = (req, res) => {
  Class.find({}).then((classes) => {
    res.render("classes/new", { classes });
  });
};

const enrollInClass = (req, res) => {
  User.findById(req.user.id).then((user) => {
    Class.find({ title: { $in: req.body.enroll } }).then((results) => {
      user.enrolledClasses.push(...results);
      user.save((err) => res.redirect("/users/enrolled"));
    });
  });
};

module.exports = {
  show,
  index,
  new: newClass,
  enrollInClass,
};
