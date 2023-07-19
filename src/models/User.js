import mongoose from 'mongoose';

const availabilitySchema = new mongoose.Schema({
  id: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  email_verified: { type: Boolean, required: true },
  password: { type: String },
  picture: { type: String },
  provider: { type: String, required: true },
  accountType: { type: String },
  price: {
    type: Number,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  country: {
    type: String,
  },
  level: {
    type: String,
  },
  language: {
    type: String,
  },
  experience: {
    type: String,
  },
  subject: {
    type: String,
  },
  ageConsent: {
    type: Boolean,
  },
  image: {
    type: String,
  },
  introduction: {
    type: String,
  },
  professionalExperience: {
    type: String,
  },
  headline: {
    type: String,
  },
  video: {
    type: String,
  },
  timeZone: {
    type: String,
  },
  availability: {
    monday: [availabilitySchema],
    tuesday: [availabilitySchema],
    wednesday: [availabilitySchema],
    thursday: [availabilitySchema],
    friday: [availabilitySchema],
    saturday: [availabilitySchema],
    sunday: [availabilitySchema],
  },
  isProfileComplete:{
    type: Boolean
  }
});

export const User = mongoose.models.User || mongoose.model('User', userSchema)