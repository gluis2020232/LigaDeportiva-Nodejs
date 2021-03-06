const express = require('express');
const cors = require('cors'); //Cabecera
const app = express();

//IMPORTACION RUTAS
const usuarioRutas = require('./src/routes/usuario.routes');
const ligasRutas = require('./src/routes/ligas.routes');
const torneosRutas = require('./src/routes/torneos.routes');
const equipoRutas = require('./src/routes/equipos.routes');
const partidoRutas = require('./src/routes/partidos.routes');
const jornadasRutas = require('./src/routes/jornada.routes')

//MIDDLEWARE : Un middleware es un intermedio y un verificador de etc
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //Convertir a json todo

//CABECERAS
app.use(cors()); //Cargo la cabecera


// CARGA DE RUTAS localhost:3000
app.use('/api', usuarioRutas, ligasRutas, torneosRutas, equipoRutas, partidoRutas, jornadasRutas);

module.exports = app;