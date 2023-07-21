const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  user1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  user2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastMessageAt: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      senderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      id: {
        type: String,
      },
      message: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export const Conversation = mongoose.models.Conversation || mongoose.model('Conversation', conversationSchema)
