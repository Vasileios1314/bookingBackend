const { Router } = require("express");
const auth = require("../auth/middleware");
const Apartments = require("../models").apartment;
const Comments = require("../models").comment;
const Ratings = require("../models").rating;
const Availability = require("../models").availability;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const apartments = await Apartments.findAll({
      include: [Comments, Ratings, Availability],
    });
    res.send(apartments);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
