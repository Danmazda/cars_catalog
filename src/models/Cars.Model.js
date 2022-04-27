import { DataTypes } from "sequelize";
import connect from "../database/db.js";

const Car =  connect.define(
  "car",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    cardId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toOneHundred: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    engineCapacity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    hp: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Car;
