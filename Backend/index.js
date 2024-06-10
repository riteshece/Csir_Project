const express = require("express");
const cors = require("cors");
const db = require("./models/index");
db.sequelize.sync();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./Route/route");

app.use("/", router);
app.use("/imagepath", express.static("/mys3bucket"));
app.listen(8081, () => {
  console.log("Server Successfully Running on Port 8081");
});
