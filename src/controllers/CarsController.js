import { Op } from "sequelize";
import Car from "../models/Cars.Model.js";

export const getAll = async (req, res) => {
  try {
    const cars = await Car.findAll({});
    let message;
    res.render("index", { cars, message });
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

export const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    await Car.destroy({
      where: {
        id,
      },
    });
    const cars = await Car.findAll({});
    const message = `${id} deleted succesfully`;
    res.render("index", { cars, message });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

export const updateOne = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      img,
      toOneHundred,
      capacity,
      maxVel,
      cylinder,
      hp,
      description,
    } = req.body;
    await Car.update(
      { name, img, toOneHundred, capacity, maxVel, cylinder, hp, description },
      {
        where: {
          id,
        },
      }
    );
    const cars = await Car.findAll({});
    const message = `${name} updated succesfully`;
    res.render("index", { cars, message });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

export const postCard = async (req, res) => {
  try {
    const { name } = req.body;
    await Car.create({ ...req.body });
    const cars = await Car.findAll({});
    const message = `${name} created succesfully`;
    res.render("index", { cars, message });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

export const searchCard = async (req, res) => {
  try {
    const { searchQuery } = req.params;
    const cars = await Car.findAll({
      where: {
        name: {
          [Op.or]: [
            {
              [Op.like]: `%${searchQuery}%`,
            },
            {
              [Op.like]: `%${
                searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)
              }%`,
            },
          ],
        },
      },
    });
    let message;
    res.render("index", { cars, message });
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
