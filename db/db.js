const mongoose = require("mongoose");
// DB Config
const db = require("../config/keys").mongoURI;

mongoose.connect(process.env.MONGODB_URI || db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("error", err => {
  console.log(err, " mongoose failed to connect");
});

mongoose.connection.on("disconncted", () => {
  console.log("Mongoose is disconnected");
});
