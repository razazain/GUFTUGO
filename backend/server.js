const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const {notFound, errorHandler} = require("./middlewares/errorMiddleware");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the Database
connectDB();

// Routes
// app.get("/", (req, res) => {
//   res.send("API is running");
// });

app.use("/api/user", userRoute);
app.use(notFound)
app.use(errorHandler)






























// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
