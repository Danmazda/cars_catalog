import { Router } from "express";
import { getAll } from "../controllers/CarsController.js";
const routes = Router();
routes.get("/", getAll);

export default routes;
