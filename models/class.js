const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: String,
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const classSchema = new Schema({
  title: { type: String, unique: true },
  subject: String,
  instructor: String,
  difficulty: { type: Number, min: 1, max: 10 },
  enrollees: [{ type: Schema.Types.ObjectId, ref: "User" }],
  reviews: [reviewSchema],
});

module.exports = mongoose.model("Class", classSchema);
