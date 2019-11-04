const express = require("express");
const router = express.Router();
const User = require("../../models/user");

// PUT Example
// router.put("/:userid/exampleURL", async (req, res) => {
//   try {
//     //Logic
//   } catch (err) {
//     console.log(err);
//     res.send(err);
//   }
// });

// GET Example
router.get("/information", async (req, res) => {
  console.log("information route hit");
  var userToFind = req.session.email;
  console.log(userToFind);

  const query = { email: userToFind };

  try {
    var foundUser = await User.findOne(query);
    console.log(foundUser);
    res.json({
      status: 200,
      session: req.session,
      user: foundUser
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
