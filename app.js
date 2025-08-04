const express = require("express");
const cors = require("cors");
require("dotenv").config();

const exampleRoutes = require("./routes/exampleRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ API is running!");
});


app.use("/api/example", exampleRoutes);

module.exports = app;
