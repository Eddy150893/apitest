const express = require("express");
const app = express();
app.use(require("./busqueda"));
module.exports = app;