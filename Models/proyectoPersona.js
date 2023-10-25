const Sequelize = require('sequelize');

const ProyectoPersona = (sequelize)=>{
    sequelize.define("proyectopersona", {
        // Agregar a
        estado:Sequelize.STRING(20)
    })
};

// Para que podamos sacar de este archivo "ProyectoPersona"
module.exports = ProyectoPersona;