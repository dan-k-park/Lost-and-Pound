require("dotenv").config();

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const mongoose = require("mongoose");
const helmet = require("helmet");

// MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(express.json());
app.use(helmet());

// Routes

app.listen(5000, () => {
  console.log("Running on port 5000");
});
