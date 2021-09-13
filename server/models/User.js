const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  googleId: String,
  friends: [],
  searchingFor: [],
});

module.exports = mongoose.model("User", UserSchema);
