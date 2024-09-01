import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import mongoDb from "./config/db.js";
import AuthRoutes from "./routes/alumniroutes.js";
import universityRoutes from "./routes/university.js";
import studentsRoutes from "./routes/studentroutes.js";
import alumnipersonaldata from './routes/alumnicurrentdetails.js'
import http from 'http';
import { Server } from "socket.io";
const app = express();
dotenv.config();

//mongodb
mongoDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//authroutes
app.use("/alumni", AuthRoutes);
app.use('/university', universityRoutes);
app.use('/student', studentsRoutes);
app.use('/current', alumnipersonaldata)

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

const server = http.createServer(app);
const io = new Server(server);


// Socket.IO connection and event handling
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  // Handle incoming messages
  // socket.on('sendMessage', (message) => {
  //   // Broadcast the message to all connected clients
  //   io.emit('message', message);
  // });

  // Handle disconnection
  // socket.on('disconnect', () => {
  //   console.log('User disconnected');
  // });
});


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
