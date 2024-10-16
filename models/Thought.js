const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [{ type: String }],
});

const Thought = mongoose.model('Thought', thoughtSchema);
module.exports = Thought;
