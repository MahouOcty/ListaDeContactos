import { Sequelize } from "sequelize-typescript";
import { Contact } from "../models/contact";
import dotenv from "dotenv";
import { DocumentType } from "../models/documentType";
import { Dialect } from "sequelize";

dotenv.config()

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST as string;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD as string;


const connection = new Sequelize({
    dialect: dbDriver,
    host: dbHost,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    logging: false,
    models: [Contact, DocumentType]
});

export default connection;