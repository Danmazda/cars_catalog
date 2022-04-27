import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const connect = new Sequelize(`${process.env.POSTGRES}`);
export default connect;
