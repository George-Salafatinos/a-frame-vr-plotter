require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");

//Setup Application
const app = express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs");

//Use body parser to enable handling post requests
app.use(bodyParser.urlencoded({ extended: true }));




//homepage
var homepage = require("./routes/homepage");
app.use("/", homepage);


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
