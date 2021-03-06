const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/Torneo_Deportivo', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//Conexión con mongodb atlas
mongoose.connect('mongodb+srv://gluis:gluis123@cluster0.obp9ldu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

    console.log('Se ha conectado correctamente a la base de datos.');

    app.listen(process.env.PORT || 1500, function() {
        console.log("Servidor de Express corriendo correctamente en el puerto 1500");
    });

}).catch(error => console.log(error));

module.exports = app;