import  express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";
// import { MongoClient } from "mongodb";
import users from "./routes/user.js";
import notes from "./routes/notes.js";

dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(morgan("tiny"))

const port = process.env.PORT || 5000 ;

// app.use(express.static("build"))


//user routes
app.use("/api/v1/users",users);

//notes routes
app.use("/api/v1/notes",notes)

//express start
app.listen(port,
    console.log(`server running in port ${port}` )
)



