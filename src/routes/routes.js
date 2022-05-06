import { Router } from "express";
import {
  deleteOne,
  getAll,
  getOne,
  postCard,
  searchCard,
  updateOne,
} from "../controllers/CarsController.js";
const routes = Router();
routes.get("/", getAll);
routes.get("/details/:id", getOne);
routes.get("/signup", (req, res) => {
  res.render("signup");
});
routes.post("/card", postCard);
routes.post("/update/:id", updateOne);
routes.get("/delete/:id", deleteOne);
routes.get("/register", (req, res) => {
  res.render("register");
});
routes.get("/search/:searchQuery", searchCard);

export default routes;
