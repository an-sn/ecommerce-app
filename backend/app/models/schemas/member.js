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
}, {collection : 'members'});

const Member = mongoose.model('Member', memberSchema);
module.exports = {Member}