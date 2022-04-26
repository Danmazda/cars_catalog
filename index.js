import express from "express";
import dotenv from "dotenv";
import { Sequelize, Op, } from "sequelize";
import { carsList } from "./commons/objects.js";
const app = express();
dotenv.config();



app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.get("/", (req, res) => {
  res.render("index", { carsList });
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/register", (req, res) => {
  res.render("register");
});


app.post("/card", (req, res) => {
  res.render("register");
});
app.post("/login", (req, res) => {
  res.render("register");
});
app.post("/signup", (req, res) => {
  res.render("register");
});