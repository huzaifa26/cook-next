import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  email_verified: { type: Boolean, required: true },
  password: { type: String },
  picture: { type: String },
  provider: { type: String, required: true },
  accountType: { type: String }
});

export const User = mongoose.models.User || mongoose.model('User', userSchema)