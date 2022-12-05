import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";
import connectDB from "./configs/connectDB";
import cors from "cors";

require("dotenv").config();

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
