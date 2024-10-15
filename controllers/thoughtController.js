const Thought = require('../models/Thought');

module.exports = {
  getThoughts: async (req, res) => {
    const thoughts = await Thought.find();
    res.json(thoughts);
  },
  
  createThought: async (req, res) => {
    const thought = await Thought.create(req.body);
    res.json(thought);
  },
  
  updateThought: async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(thought);
  },
  
  deleteThought: async (req, res) => {
    await Thought.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  },
  
  addReaction: async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $addToSet: { reactions: req.body.reaction } }, { new: true });
    res.json(thought);
  },
  
  deleteReaction: async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: req.body.reaction } }, { new: true });
    res.json(thought);
  },
};
