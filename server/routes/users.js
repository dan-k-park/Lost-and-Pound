const User = require("../models/User");

const router = require("express").Router();

// Get a user
router.get("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    const { googleId, email, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Add user as a friend
router.put("/friends/add/:userId", async (req, res) => {
  // Make sure users aren't adding themselves as friends
  if (req.body.userId !== req.params.id) {
    const pendingFriend = await User.findById(req.params.userId);
    const currentUser = await User.findById(req.body.userId);
    try {
      if (!pendingFriend.friends.includes(req.body.userId)) {
        await pendingFriend.updateOne({ $push: { friends: req.body.userId } });
        await currentUser.updateOne({ $push: { friends: req.params.userId } });
        res.status(200).json("Successfully added to friends list.");
      } else {
        res.status(403).json("You are already friends with this user!");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You can't befriend yourself!");
  }
});

// Unfriend a user
router.put("/friends/remove/:userId", async (req, res) => {
  if (req.body.userId !== req.params.userId) {
    try {
      const pendingUnfriend = await User.findById(req.params.userId);
      const currentUser = await User.findById(req.body.userId);

      if (pendingUnfriend.friends.includes(req.body.userId)) {
        await pendingUnfriend.updateOne({
          $pull: { friends: req.body.userId },
        });
        await currentUser.updateOne({ $pull: { friends: req.params.userId } });
        res.status(200).json("User has been unfriended.");
      } else {
        res.status(403).json("You aren't friends with this user.");
      }
    } catch (error) {}
  } else {
    res.status(403).json("You can't unfriend yourself!");
  }
});

module.exports = router;
