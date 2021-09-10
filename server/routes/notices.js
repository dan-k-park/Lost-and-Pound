const router = require("express").Router();
const Notice = require("../models/Notice");
const User = require("../models/User");

// Create a new lost pet notice
router.post("/", async (req, res) => {
  const { name, description, state, city, imgUrl, searchers, found } = req.body;

  const notice = new Notice({
    name,
    description,
    lastSeen,
    state,
    city,
    imgUrl,
    searchers,
    found,
    _user: req.user.id,
  });

  try {
    await notice.save();
    res.status(201).json(notice);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Get lost pet notices in the area
router.get("/:state/:county", async (req, res) => {
  try {
    const stateNotices = await Notice.find({ state: req.params.state });
    const countyNotices = await Promise.all();
  } catch (error) {}
});

// Get lost pet notices that user is following

// Update lost pet notice

// Delete lost pet notice

module.exports = router;
