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
import Message from "./models/messagemodels.js";
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


  // Join a room for a particular recipient
  socket.on('joinRoom', (recipient) => {
    socket.join(recipient);
  });

  // Handle incoming messages
  socket.on('sendMessage', async (newMessage) => {
    const message = new Message(newMessage);
    await message.save();
    io.to(newMessage.recipient).emit('message', newMessage);
    io.to(newMessage.sender).emit('message', newMessage); // Ensure sender also receives the message
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });

});


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
