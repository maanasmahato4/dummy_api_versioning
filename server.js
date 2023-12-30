import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { createTasksTable, createUsersTable } from "./database/createTable.js";
import {generateData} from "./seeder/seeder.js";
import routes from "./routes/index.js";

// environment variables setup
dotenv.config();
createUsersTable();
createTasksTable();

const app = express();

// middlwares
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000"]
}));

app.use("/api", routes);



app.listen(process.env.PORT, () => {
    console.log('server running at http://localhost:3000');
});
