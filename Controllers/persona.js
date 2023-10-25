const Seq = require('sequelize');
const sequelize = require('../Util/database') // Objeto conexion
const Persona = sequelize.models.persona;

exports.postAgregarPersona=(req, res)=>{
    console.log(req.body);
    // Para INSERT, se usa create:
    Persona.create(req.body)
        .then(result=>{
            console.log("Registro exitoso");
            res.send("Registro exitoso");
        })
        .catch(error=>{
            console.log(error);
            res.send("Hubo un problema")
        })
}