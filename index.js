// Archivo integrador: Inicio del proyecto
// Importar bibliotecas

const express = require("express"); // Framework para generación de páginas
const { request } = require("http");
const { error } = require("console");
const app = express()

// Traer el objeto de conexión:
const sequelize = require('./Util/database')

// Middleware: Recibe la petición, y si le falta algo, la procesa y la manda al backend
app.use(express.json()); // Para que sepa que llegan json

// // Mala práctica
// app.get('/test', (request, response) => {
//     console.log("Esto no se debe de hacer pero funciona.");
//     response.send('<h1>Servidor funcionando</h1>');
// })

// Levantar el server y escuchar peticiones
sequelize.sync()
    .then(result=>{
        app.listen(8080, ()=>{ // Callback: Función que se ejecuta cuando se llama a una función.
            console.log("Servidor escuchando 😄")
        })
    })
    .catch(error=>console.log(error))
