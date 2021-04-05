"use strict";

var express = require("express");

var app = express();
app.use(express["static"]("public"));
app.get("/", function (req, res) {
  res.render("home.ejs");
});
app.get("/projects", function (req, res) {
  res.render("projects.ejs");
});
app.get("/certifications", function (req, res) {
  res.render("certifications.ejs");
});
app.get("/work_exp", function (req, res) {
  res.render("work_exp.ejs");
});
app.get("/contact", function (req, res) {
  res.render("contact.ejs");
});
app.listen(3000, function () {
  console.log("App is Working!!!");
});