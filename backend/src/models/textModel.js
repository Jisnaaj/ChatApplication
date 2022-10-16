
const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
  fromUser: {
    type: String,
    required: true,
  },
  toUser: {
    type: String,
    required: true,
  },
  textType: {
    type: String,
    required: true,
  },
  textContent: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: [String],
    default: "0",
  },
});

module.exports = mongoose.model("Text", textSchema);