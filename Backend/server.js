const express = require("express");
const { Server } = require("socket.io");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./routers/authrouter");
const CustomerRouter = require("./routers/customerrouter");
const session = require("express-session");
const server = require("http").createServer(app);
const bodyParser = require('body-parser');

require("dotenv").config();

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  },
});

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
      httpOnly: true,
      expires: 1000 * 60 * 60 * 24 * 7,
      sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    },
  })
);
app.use("/auth", authRouter);

app.use("/api", CustomerRouter);

io.on("connect", socket => {});

// const PORT = process.env.PORT || 5000;


server.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
