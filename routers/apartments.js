const { Router } = require("express");
const auth = require("../auth/middleware");
const Apartments = require("../models").apartment;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const apartments = await Apartments.findAll();
    res.send(apartments);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
