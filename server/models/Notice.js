const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
  _user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  lastSeenAt: {
    type: Date,
  },
  lastSeenNear: {
    type: String,
  },
  location: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
  searchers: {
    type: Array,
    default: [],
  },
  found: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Notice", NoticeSchema);
