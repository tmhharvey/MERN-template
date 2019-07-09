const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/user");

//Registration Example
router.post("/register", async (req, res) => {
  console.log("register route hit...");
  console.log(req.body.password);
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const userDbEntry = {};
  userDbEntry.userName = req.body.userName;
  userDbEntry.email = req.body.email;
  userDbEntry.password = hashedPassword;
  userDbEntry.userType = "U";

  console.log(userDbEntry.password);
  console.log(userDbEntry.userName);
  console.log(userDbEntry.email);
  console.log(userDbEntry.userType);

  try {
    const emailTaken = await User.findOne({
      email: userDbEntry.email
    });

    const userNameTaken = await User.findOne({
      userName: userDbEntry.userName
    });

    console.log("Is the user EMAIL taken: " + emailTaken ? "Yes" : "No");
    console.log("Is the user NAME taken: " + userNameTaken ? "Yes" : "No");

    if (!emailTaken && !userNameTaken) {
      if (req.body.email && req.body.password && req.body.userName) {
        console.log("====");
        console.log(userDbEntry);
        const user = await User.create(userDbEntry);
        console.log("user created: " + user);

        req.session.email = user.email;
        req.session.userName = user.userName;
        req.session.logged = true;
        req.session.userId = user._id;

        res.json({
          status: 200,
          session: req.session,
          userId: user._id,
          userType: "U",
          message: "User Successfully Created"
        });
      } else {
        console.log("PLEASE ENTER USERNAME AND PASSWORD.");
        res.json({
          status: 406,
          data: JSON.stringify({
            message: "PLEASE ENTER USERNAME AND PASSWORD."
          })
        });
      }
    } else {
      console.log("USERNAME TAKEN.");
      res.json({
        status: 406,
        data: JSON.stringify({
          message: "USERNAME TAKEN."
        })
      });
    }
  } catch (err) {
    console.log(`Login failed. Error: ${err}`);
    res.send(`Login failed. Error: ${err}`);
  }
});

//Login Example
router.post("/login", async (req, res) => {
  console.log(req.body.emailOrUserName);
  try {
    const foundUserEmail = await User.findOne({
      email: req.body.emailOrUserName
    });
    console.log(`FOUND EMAIL: ${foundUserEmail}`);

    const foundUserName = await User.findOne({
      userName: req.body.emailOrUserName
    });
    console.log(`FOUND USER: ${foundUserName}`);

    if (foundUserEmail || foundUserName) {
      var foundUser = foundUserEmail ? foundUserEmail : foundUserName;
      console.log("found user is true");
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        console.log("PASSWORD CORRECT.");
        req.session.message = "";
        req.session.email = foundUserEmail
          ? foundUserEmail.email
          : foundUserName.email;
        req.session.userName = foundUserEmail
          ? foundUserEmail.userName
          : foundUserName.userName;
        req.session.logged = true;
        req.session.userId = foundUserEmail
          ? foundUserEmail._id
          : foundUserName._id;
        req.session.userType = foundUserEmail
          ? foundUserEmail.userType
          : foundUserName.userType;
        console.log(`STARTED SESSION: ${req.session}`);
        res.json({
          status: 200,
          session: req.session,
          userId: req.session.userId,
          userType: req.session.userType
        });
      } else {
        req.session.message = "USERNAME/PASS INCORRECT";
        res.json({
          status: 406,
          data: {
            message: "USERNAME/PASS INCORRECT"
          }
        });
      }
    } else {
      req.session.message = "USERNAME/PASS INCORRECT";
      res.json({
        status: 406,
        data: JSON.stringify({
          message: "USERNAME/PASS INCORRECT"
        })
      });
    }
  } catch (err) {
    res.send(err);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
