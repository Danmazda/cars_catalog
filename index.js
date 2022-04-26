import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

