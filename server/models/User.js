const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  googleId: String,
});

module.exports = mongoose.model("User", UserSchema);
