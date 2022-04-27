import Car from "../models/Cars.Model.js";

export const getAll = async (req, res) => {
  try {
    console.log("Car models has been synced");
    const cars = await Car.findAll();
    res.render("index", { cars });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
