import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import mongoDb from "./config/db.js";
import AuthRoutes from "./routes/alumniroutes.js";
import universityRoutes from "./routes/university.js";
import studentsRoutes from "./routes/studentroutes.js";
const app = express();
dotenv.config();

//mongodb
mongoDb();
app.use(express.json());

//authroutes
app.use("/alumni", AuthRoutes);
app.use('/university',universityRoutes);
app.use('/student', studentsRoutes);

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
