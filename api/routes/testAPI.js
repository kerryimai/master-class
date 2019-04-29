var express = require("express");
var router = express.Router();

const skills = [
  { skill: "boxing", name: "Kerry", email: "kimai@inrhythm.com" },
  { skill: "painting", name: "ayaz", email: "audin@inrhythm.com" },
  { skill: "Makeup", name: "Megan", email: "megan@inrhythm.com" },
  { skill: "coding", name: "Dave", email: "Dmai@inrhythm.com" },
  { skill: "Ride a mountain bike", name: "Kerry", email: "Limai@inrhythm.com" },
  { skill: "financial investment", name: "Ryan", email: "Rsmith@inrhythm.com" }
];

router.get("/", function(req, res, next) {
  res.send(skills);
});
module.exports = router;
