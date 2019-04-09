const express = require("express");
const router = express.Router();
// const User = require("../models/user");
// const bcrypt = require("bcryptjs");

// //Registration Example
// router.post("/register", async (req, res) => {
//   const password = req.body.password;
//   const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
//   const userDbEntry = {};
//   userDbEntry.username = req.body.username;
//   userDbEntry.password = hashedPassword;

//   try {
//     const usernameTaken = await User.findOne({
//       username: userDbEntry.username
//     });

//     if (!usernameTaken) {
//       if (req.body.username && req.body.password) {
//         const user = await User.create(userDbEntry);

//         req.session.username = user.username;
//         req.session.logged = true;
//         req.session.userId = user._id;

//         res.json({
//           status: 200,
//           data: {
//             session: req.session,
//             userId: user._id
//           }
//         });
//       } else {
//         console.log("PLEASE ENTER USERNAME AND PASSWORD.");
//         res.json({
//           status: 406,
//           data: JSON.stringify({
//             message: "PLEASE ENTER USERNAME AND PASSWORD."
//           })
//         });
//       }
//     } else {
//       console.log("USERNAME TAKEN.");
//       res.json({
//         status: 406,
//         data: JSON.stringify({
//           message: "USERNAME TAKEN."
//         })
//       });
//     }
//   } catch (err) {
//     console.log(`Login failed. Error: ${err}`);
//     res.send(`Login failed. Error: ${err}`);
//   }
// });

// //Login Example
// router.post("/login", async (req, res) => {
//   try {
//     const foundUser = await User.findOne({ username: req.body.username });
//     console.log(`FOUND USER: ${foundUser}`);
//     //console.log("request sent:" + req.body);

//     if (foundUser) {
//       if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//         console.log("PASSWORD CORRECT.");
//         req.session.message = "";
//         req.session.username = foundUser.username;
//         req.session.logged = true;
//         req.session.userId = foundUser._id;
//         console.log(`STARTED SESSION: ${req.session}`);
//         res.json({
//           status: 200,
//           data: {
//             session: req.session,
//             userId: foundUser._id
//           }
//         });
//       } else {
//         req.session.message = "USERNAME/PASS INCORRECT";
//         res.json({
//           status: 406,
//           data: {
//             message: "USERNAME/PASS INCORRECT"
//           }
//         });
//       }
//     } else {
//       req.session.message = "USERNAME/PASS INCORRECT";
//       res.json({
//         status: 406,
//         data: JSON.stringify({
//           message: "USERNAME/PASS INCORRECT"
//         })
//       });
//     }
//   } catch (err) {
//     res.send(err);
//   }
// });

// //Logout Example
// router.get("/logout", (req, res) => {
//   req.session.destroy(err => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.redirect("/");
//     }
//   });
// });

module.exports = router;
