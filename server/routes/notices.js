const router = require("express").Router();
const Notice = require("../models/Notice");
const User = require("../models/User");
const requireUnique = require("../middlewares/requireUnique");

const NodeGeocoder = require("node-geocoder");
const options = {
  provider: "google",
  apiKey: process.env.GOOGLE_GEOCODING_API_KEY,
  formatter: null,
};
const geocoder = NodeGeocoder(options);

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Create a new lost pet notice
router.post("/", requireUnique, async (req, res) => {
  const { city, state } = req.body;
  const county = (await geocoder.geocode(`${city} + ${state}`))[0]
    .administrativeLevels.level2long;

  const notice = new Notice({
    ...req.body,
    county,
    searchers: [req.body.userId],
  });

  try {
    await notice.save();
    res.status(201).json(notice);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Get lost pet notices by county
router.get("/:state/:county", async (req, res) => {
  const { state, county } = req.params;
  try {
    const notices = await Notice.find({
      state: capitalize(state),
      county: `${capitalize(county)} County`,
    });
    res.status(200).json(notices);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Get lost pet notices in the city
router.get("/:state/:county/:city", async (req, res) => {
  const { city, county } = req.params;
  try {
    const notices = await Notice.find({
      city: capitalize(city),
      county: `${capitalize(county)} County`,
    });
    res.status(200).json(notices);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Get lost pet notice by id
router.get("/:id", async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    res.status(200).json(notice);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Search for a pet (add to searchingFor array)
router.put("/:id", async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (!notice.searchers.includes(req.body.userId)) {
      await notice.updateOne({ $push: { searchers: req.body.userId } });
      res.status(200).json("Searching for this pet.");
    } else {
      await notice.updateOne({ $pull: { searchers: req.body.userId } });
      res.status(200).json("No longer searching for this pet.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// Get a feed of lost pet notices that user is following
router.get("/feed", async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    const userNotices = await Post.find({ _user: req.user.id });
    const searchingFor = await Promise.all(
      currentUser.searchingFor.map((noticeId) => {
        return Notice.find({});
      })
    );
  } catch (error) {}
});

// Update lost pet notice

// Delete lost pet notice

module.exports = router;
