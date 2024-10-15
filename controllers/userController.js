const User = require('../models/User');

module.exports = {
  getUsers: async (req, res) => {
    const users = await User.find().populate('thoughts').populate('friends');
    res.json(users);
  },
  
  createUser: async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
  },
  
  updateUser: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  },
  
  deleteUser: async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  },
  
  addFriend: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
    res.json(user);
  },
  
  removeFriend: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
    res.json(user);
  },
};
