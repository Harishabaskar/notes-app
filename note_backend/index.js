import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
import users from "./routes/user.js";
import notes from "./routes/notes.js";

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(morgan("tiny"))

const port = process.env.PORT || 5000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, 'build')));



//user routes
app.use("/api/v1/users", users);

//notes routes
app.use("/api/v1/notes", notes)


app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'build', 'index.html'));
});

//express start
app.listen(port,
    console.log(`server running in port ${port}`)
)



