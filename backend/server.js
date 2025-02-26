const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require('path');
const favicon = require('serve-favicon');
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

const {notFound, errorHandler} = require("./middlewares/errorMiddleware");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to the Database
connectDB();

// Routes
app.use("/api/user", userRoute);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);




app.get('/favicon.ico', (req, res) => res.status(204).end());


app.use(notFound);
app.use(errorHandler);










// app.get("/", (req, res) => {
//   res.send("API is running");
// });




// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
