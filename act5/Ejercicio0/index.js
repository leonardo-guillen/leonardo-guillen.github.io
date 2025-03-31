//Dependencias
const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

//Rutas
const apiRoute = require('./routes/api');

app.use('/', apiRoute);

app.listen(PORT, () => {
  console.log(`Servidor en escucha en localhost:${PORT}`);
});
