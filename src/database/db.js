import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const connect = new Sequelize(`${process.env.POSTGRES}`, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
export default connect;
