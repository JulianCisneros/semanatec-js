// Cómo utilizar la herramienta ORM Sequelize
const Sequelize = require('sequelize');
const {applyRelations} = require('./relations') // Punto es el dir donde estás

// Configurar la conexión:
// mysql -u admin -h -P 3306 -p
const sequelize = new Sequelize('semanatec', 'admin', 'Password', { // Esta forma de poner el password no es segura
    // Para más seguridad, poner el password en el archivo .end
    dialect: "mysql",
    host: 'database-1.cw6iqrbikp2n.us-east-1.rds.amazonaws.com',
    define:{
        // Evitar que nos ponga createdAt y updateAt
        timestamps: false,
        // Pluralizar: Que no se ponga "Alumnos", en lugar de "Alumno"
        freezeTableName: true
    }
}); // Objeto de conexión

// Cargar modelos:
const modelDefiners = [
    require('../Models/persona'),
    require('../Models/proyecto'),
    require('../Models/proyectoPersona')
];

// Vincular modelo con objeto de conexión:
for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
};

// Construit las relaciones:
applyRelations(sequelize);

// Exportar el elemento de conexión
module.exports = sequelize;