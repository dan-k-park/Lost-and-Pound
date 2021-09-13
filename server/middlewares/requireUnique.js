const Notice = require("../models/Notice");

module.exports = async (req, res, next) => {
  const { userId, name, species } = req.body;
  const duplicate = await Notice.find({
    userId,
    name,
    species,
  });
  if (duplicate.length) {
    return res
      .status(500)
      .send({ error: "Cannot create duplicate lost pet notices." });
  }

  next();
};
