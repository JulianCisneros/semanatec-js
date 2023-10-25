const Sequelize = require('sequelize');

const Proyecto = (sequelize)=>{
    sequelize.define("proyecto", {
        idProyecto:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        nombre:Sequelize.STRING(30),
        descripcion:Sequelize.STRING
    })
};

// Para que podamos sacar de este archivo "Proyecto"
module.exports = Proyecto;