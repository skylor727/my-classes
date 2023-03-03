const Class = require("../models/class");

const deleteReview = (req, res) => {
  Class.findOne({
    "reviews._id": req.params.id,
    "reviews.user": req.user._id,
  })
    .then((classR) => {
      classR.reviews.remove(req.params.id);
      return classR.save();
    })
    .then((classR) => res.redirect(`/my-classes/classes/${classR._id}`));
};

const create = (req, res) => {
  Class.findById(req.params.id).then((classR) => {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    classR.reviews.push(req.body);
    classR.save(() => {
      res.redirect(`/my-classes/classes/${classR._id}`);
    });
  });
};

module.exports = {
  delete: deleteReview,
  create,
};
