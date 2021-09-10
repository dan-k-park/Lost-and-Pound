require("dotenv").config();

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cookieSession = require("cookie-session");
const passport = require("passport");
const userRoute = require("./routes/users");
const noticeRoute = require("./routes/notices");
const authRoute = require("./routes/auth");
require("./services/passport");

// MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/users", userRoute);
app.use("/api/notices", noticeRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("Running on port 5000");
});
