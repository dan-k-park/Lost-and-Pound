const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  lastSeen: {
    type: Date,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  county: {
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
