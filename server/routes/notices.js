const router = require("express").Router();
const Notice = require("../models/Notice");
const User = require("../models/User");

// Create a new lost pet notice
router.post("/", async (req, res) => {
  const {
    name,
    description,
    lastSeenAt,
    lastSeenNear,
    imgUrl,
    searchers,
    found,
  } = req.body;

  const notice = new Notice({
    name,
    description,
    lastSeenAt,
    lastSeenNear,
    location,
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

// Get lost pet notices that user is following

// Update lost pet notice

// Delete lost pet notice
