const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  if (singleChat) {
    res.send(singleChat);
  } else {
    res.status(404).send({ message: "Chat not found" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
