const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

// Routes

// MongoDB
const mongoose = require("mongoose");

// Helpers
const helmet = require("helmet");

app.listen(5000, () => {
  console.log("Running on port 5000");
});
