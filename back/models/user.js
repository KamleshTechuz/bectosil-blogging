const mongoose = require("mongoose");

const User = mongoose.model("User", {
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  mobile: { type: Number },
  password: { type: String },
  imageUrl: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
  token: { type: String },

});
module.exports = User;
