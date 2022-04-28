import Car from "../models/Cars.Model.js";

export const getAll = async (req, res) => {
  try {
    const cars = await Car.findAll({
      attributes: ["id", "img","name", "hp", "maxVel"]
    });
    res.render("index", { cars });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.findOne({
      where: {
        id: id,
      },
    });
    res.render("details", { car });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

export const postCard = async (req, res) => {
  try {
    console.log(req.body);
    const car = await Car.create({ ...req.body });
    res.send("Card Created Succesfully");
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
