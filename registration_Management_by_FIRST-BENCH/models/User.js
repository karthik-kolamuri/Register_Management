const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true, minlength: 8 },
  phoneNumber: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('User', userSchema);
