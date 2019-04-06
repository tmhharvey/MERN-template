const express = require("express");
const router = express.Router();
const User = require("../models/user");

// PUT Example
router.put("/:userid/exampleURL", async (req, res) => {
  try {
    //Logic
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// GET Example
router.get("/:userid/exampleURL", async (req, res) => {
  try {
    //Logic
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
