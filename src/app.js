require("dotenv").config();
const express = require("express");

const app = express();

// Upload
app.use(express.static(require("path").join(__dirname, "uploads")));

// Req.body
app.use(express.json());

// Cors
app.use(require("cors")());

app.use(require("./middlewares/authorization.js"));
app.use("/api", require("./modules/index.js"));

// Error processing
app.use(require("./middlewares/errorHandling.middleware.js"));

app.listen(process.env.PORT, () => console.log(`*${process.env.PORT}`));