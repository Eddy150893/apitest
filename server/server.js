require("./config/config");
const express = require("express");
const path=require('path');
var cors = require('cors')
const app = express();
app.use(cors());
//app.use(bodyParser.json({ extended: false }));
//Configuracion global de rutas
app.use(require('./routes/index'));
app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT);
});
  