import { Router } from "express";
import { getAll, getOne, postCard } from "../controllers/CarsController.js";
const routes = Router();
routes.get("/", getAll);
routes.get("/details/:id", getOne);
routes.get("/signup", (req, res)=>{
  res.render("signup");
});
routes.post("/card", postCard);
routes.get("/register", (req, res)=>{
  res.render("register");
});

export default routes;
