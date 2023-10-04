import { Schema, model } from 'mongoose';

const memberSchema = new Schema({
  name: {
    type: String,
    required: true
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

const Member = model('Member', memberSchema);
export default Member;