const { Router } = require("express");
const auth = require("../auth/middleware");
const Apartments = require("../models").apartment;
const Comments = require("../models").comment;
const Ratings = require("../models").rating;
const Availability = require("../models").availability;
const User = require("../models").user;

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

router.get("/:id", async (req, res, next) => {
  try {
    const apartmentId = parseInt(req.params.id);
    const apartment = await Apartments.findByPk(apartmentId, {
      include: [
        {
          model: Comments,
          include: [
            {
              model: User,
              attributes: ["name", "country", "image"],
            },
          ],
        },
        Ratings,
        Availability,
      ],
    });
    if (apartment) {
      res.send(apartment);
    } else {
      res.status(404).send("Apartment not found");
    }
  } catch (e) {
    next(e);
  }
});

router.post("/newRating", auth, async (req, res, next) => {
  try {
    const { apartmentId, rating, userId } = req.body;

    // Check if the user has already rated the apartment
    const existingRating = await Ratings.findOne({
      where: {
        apartmentId: apartmentId,
        userId: userId,
      },
    });

    if (existingRating) {
      // User has already rated the apartment
      return res.status(400).send("You have already rated this apartment.");
    }

    // Create a new rating
    const newRating = await Ratings.create({
      apartmentId,
      rating,
      userId,
    });

    if (newRating) {
      res.send(newRating);
    } else {
      res.status(404).send("newRating not found");
    }
  } catch (e) {
    next(e);
  }
});

router.post("/newComment", auth, async (req, res, next) => {
  try {
    const { apartmentId, comment, userId } = req.body;

    // Check if the user has already comment the apartment
    const existingComment = await Comments.findOne({
      where: {
        apartmentId: apartmentId,
        userId: userId,
      },
    });

    if (existingComment) {
      // User has already comment the apartment
      return res.status(400).send("You have already reviewed this apartment.");
    }

    // Create a new comment
    const newComment = await Comments.create({
      apartmentId,
      comment,
      userId,
    });

    if (newComment) {
      res.send(newComment);
    } else {
      res.status(404).send("newComment not found");
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
