//jshints eveersion:6

const express = require("express");

const bodyParser = require("body-parser");
const request = require("request");
const e = require("express");

const app = express();

app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});


