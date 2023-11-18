require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/auth");
const connectDB = require("./db/connect");

// middlewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "https://localhost:5173",
    method: ["GET", "POST", "PUT", "DELETE"],
  })
);
// app.use(express.static("../public"));

app.get("/", (req, res) => {
  res.send("<h1>hello<h1>");
});

app.use("/", userRouter);

const port = 4100;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(
      port,
      console.log(`Server is listening on http://localhost:${port}`)
    );
  } catch (err) {
    if (err.hostname === "_mongodb._tcp.shoppingcluster.lvoxaoq.mongodb.net") {
      console.log("Unable to connect! check ur internet connection");
    } else {
      console.log(err);
    }
  }
};
start();
