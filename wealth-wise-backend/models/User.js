// wealth-wise-backend/models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true, // Removes whitespace
  },
  lastName: {
    type: String,
    required: true,
    trim: true, // Removes whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Converts email to lowercase
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Ensures password is at least 6 characters
  },
  preferences: {
    language: { type: String, default: 'EN' },
    theme: { type: String, default: 'light' },
    currency: { type: String, default: 'CAD' }, // Changed to 'CAD'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash the password before saving the user model
UserSchema.pre('save', async function (next) {
  try {
    // Check if password is modified
    if (!this.isModified('password')) {
      return next();
    }
    // Generate salt
    const salt = await bcrypt.genSalt(10);
    // Hash password
    const hashedPassword = await bcrypt.hash(this.password, salt);
    // Replace plain password with hashed password
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare given password with database hash
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
