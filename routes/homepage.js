//Home page
const bodyParser = require("body-parser");
const express = require("express");
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));


router.get("/", function (req, res) {
    //Display site
    res.render("../views/index");
  });

module.exports = router;
