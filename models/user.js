const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    role: { type: String, required: true, default: "ROLE_BASIC" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
