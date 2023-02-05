require("colors");
require("dotenv").config();
require("./db/connexion");
const morgan = require("morgan");
const express = require("express");

const interfaceRoutes = require("./routes/interface.routes");
const taskAPIRoutes = require("./routes/taskAPI.routes");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", interfaceRoutes);
app.use("/api", taskAPIRoutes);

app.listen(PORT, () =>
  console.log(`server démarré sur l'adresse http://${HOSTNAME}:${PORT}`)
);
