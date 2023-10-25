// Cómo utilizar la herramienta ORM Sequelize
const Sequelize = require('sequelize');

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

const Ejemplo = sequelize.define('ejemplo', {
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:true
    }
});

const Ejemplo2 = sequelize.define('ejemplo', {
    idTrabajo:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:true
    }
});

// Prueba de conexión
sequelize.sync()
    .then(result=>{
        console.log("Conexión exitosa");
    })
    .catch(error=>console.log(error))