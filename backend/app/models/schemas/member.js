const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  borrowedBooks: {
    type: Array
  },
  lateFees: {
    type: Number
  }
});

module.exports = mongoose.model('Member', memberSchema);