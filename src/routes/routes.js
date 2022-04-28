import { Router } from "express";
import { deleteOne, getAll, getOne, postCard, updateOne } from "../controllers/CarsController.js";
const routes = Router();
routes.get("/", getAll);
routes.get("/details/:id", getOne);
routes.get("/signup", (req, res)=>{
  res.render("signup");
});
routes.post("/card", postCard);
routes.post("/update", updateOne);
routes.get("/delete/:id", deleteOne);
routes.get("/register", (req, res)=>{
  res.render("register");
});

export default routes;
