import express from "express";
import routes from './src/routes/routes.js';
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});


