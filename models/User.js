const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  avatar: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

model.exports = User = mongoose.model('users', UserSchema);
