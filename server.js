require("./db/db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const path = require("path");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "mutaPets/build")));

const corsOptions = {
  origin: `http://localhost:3000`,
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// ROUTING
const authController = require("./controllers/api/register");
app.use("/auth", authController);

const userController = require("./controllers/api/userController");
app.use("/user", userController);

// const dataController = require("./controllers/dataController");
// app.use("/data", dataController);

// const userController = require("./controllers/userController");
// app.use("/user", userController);

const port = process.env.PORT || 9000;

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
  console.log("listening on port: " + port);
});
