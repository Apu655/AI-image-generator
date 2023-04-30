const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./mongodb/connect.js");
const postRoutes = require("./routes/postRoutes");
const dalleRoutes = require("./routes/dalle");
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(process.env.PORT, () => {
      console.log("Server has started at ", process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
