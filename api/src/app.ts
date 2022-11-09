import express, {  Request, Response } from 'express'
import dotenv from "dotenv";
import contactRoutes from "./router/contact"
import documentTypeRoutes from "./router/documentTypes"
import connection from './db/config';
const cors = require('cors');

dotenv.config()

const app = express()
const port = process.env.PORT;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/contact", contactRoutes)
app.use("/document", documentTypeRoutes)

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
)=> {
    res.status(500).json({error: err.message})
})

connection.sync().then(() => {
    console.log("Database synced succesfuly")
}).catch((err: Error) => {
    console.log("Err", err)
})

app.listen(port)