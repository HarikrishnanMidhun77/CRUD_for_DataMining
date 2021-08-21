const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const blog = require("./routes/blog");
var cors = require("cors");

app.use(bodyParser.json({ limit: "20MB" }));
app.use(bodyParser.urlencoded({ limit: "20MB", extended: true }));

app.use(cors());
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world by Hari from iGen"));
app.listen(port, () => console.log(`Server is running on Port ${port}`));

app.use("/api/blog", blog);
